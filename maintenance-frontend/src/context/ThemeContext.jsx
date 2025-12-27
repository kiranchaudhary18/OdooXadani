import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const THEME_COLORS = {
  orange: {
    primary: '#ea580c',
    light: '#fed7aa',
    dark: '#c2410c',
    bg: 'bg-orange-600',
    bgLight: 'bg-orange-100',
    text: 'text-orange-600',
    hover: 'hover:bg-orange-700',
    ring: 'ring-orange-500',
    button: 'bg-orange-600 hover:bg-orange-700',
    accent: 'accent-orange-600',
  },
  blue: {
    primary: '#2563eb',
    light: '#dbeafe',
    dark: '#1d4ed8',
    bg: 'bg-blue-600',
    bgLight: 'bg-blue-100',
    text: 'text-blue-600',
    hover: 'hover:bg-blue-700',
    ring: 'ring-blue-500',
    button: 'bg-blue-600 hover:bg-blue-700',
    accent: 'accent-blue-600',
  },
  green: {
    primary: '#16a34a',
    light: '#dcfce7',
    dark: '#15803d',
    bg: 'bg-green-600',
    bgLight: 'bg-green-100',
    text: 'text-green-600',
    hover: 'hover:bg-green-700',
    ring: 'ring-green-500',
    button: 'bg-green-600 hover:bg-green-700',
    accent: 'accent-green-600',
  },
  purple: {
    primary: '#9333ea',
    light: '#f3e8ff',
    dark: '#7e22ce',
    bg: 'bg-purple-600',
    bgLight: 'bg-purple-100',
    text: 'text-purple-600',
    hover: 'hover:bg-purple-700',
    ring: 'ring-purple-500',
    button: 'bg-purple-600 hover:bg-purple-700',
    accent: 'accent-purple-600',
  },
};

export const ThemeProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState(() => {
    // Get theme from localStorage on mount
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('appThemeColor');
      return saved || 'orange';
    }
    return 'orange';
  });

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('appThemeColor', themeColor);
    }
  }, [themeColor]);

  const changeTheme = (color) => {
    if (THEME_COLORS[color]) {
      setThemeColor(color);
    }
  };

  const getCurrentTheme = () => {
    return THEME_COLORS[themeColor] || THEME_COLORS.orange;
  };

  const value = {
    themeColor,
    changeTheme,
    theme: getCurrentTheme(),
    allThemes: THEME_COLORS,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

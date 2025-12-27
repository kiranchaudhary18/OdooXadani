/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand color - Deep Indigo
        primary: {
          50: '#f0f4ff',
          100: '#e6eeff',
          200: '#cfe1ff',
          300: '#b3c9ff',
          400: '#8da6ff',
          500: '#6b7fff', // Main brand
          600: '#4c5bff',
          700: '#3d48e6',
          800: '#2d35cc',
          900: '#1f23a6',
          950: '#121554',
        },
        // Secondary accent - Teal/Cyan
        accent: {
          50: '#f0fdf9',
          100: '#ccfdf3',
          200: '#99fce6',
          300: '#66f8d9',
          400: '#33eecc', // Main accent
          500: '#1abf8a',
          600: '#139966',
          700: '#0d7352',
          800: '#085c3e',
          900: '#04452a',
          950: '#021f13',
        },
        // Status colors
        status: {
          critical: '#ef4444',
          warning: '#f59e0b',
          success: '#22c55e',
          info: '#3b82f6',
          scrap: '#dc2626',
        },
        // Neutral palette
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      },
      borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
    },
  },
  plugins: [],
}

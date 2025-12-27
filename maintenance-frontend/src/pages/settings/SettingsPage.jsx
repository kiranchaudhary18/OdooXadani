import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell, Lock, Moon, Globe, Volume2, Eye, Save } from 'lucide-react';
import { useSidebar } from '../../context/SidebarContext';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

const SettingsPage = () => {
  const { isSidebarOpen } = useSidebar();
  const navigate = useNavigate();
  const { user: currentUser } = useAuth();
  const { themeColor, changeTheme, theme } = useTheme();

  // Settings state
  const [settings, setSettings] = useState({
    // Notifications
    emailNotifications: true,
    pushNotifications: true,
    maintenanceAlerts: true,
    weeklyReport: false,
    
    // Privacy & Security
    twoFactorAuth: false,
    publicProfile: false,
    
    // Display
    darkMode: false,
    language: 'en',
    
    // Sound
    soundEnabled: true,
    volume: 70,
  });

  const [saveMessage, setSaveMessage] = useState('');

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSliderChange = (e) => {
    setSettings(prev => ({
      ...prev,
      volume: parseInt(e.target.value)
    }));
  };

  const handleSelectChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSaveSettings = () => {
    // Here you would typically send to backend
    setSaveMessage('Settings saved successfully!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  // Generate toggle styles based on theme
  const getToggleStyle = () => {
    return {
      boxShadow: `inset 0 0 0 2px ${theme.light}`,
    };
  };

  // Generate inline style for toggle with theme color
  const getToggleCSSVariables = () => {
    return `
      .theme-toggle {
        accent-color: ${theme.primary};
      }
      .theme-toggle:checked + div {
        background-color: ${theme.primary} !important;
      }
      .theme-toggle:focus-visible + div {
        box-shadow: 0 0 0 3px ${theme.light} !important;
      }
    `;
  };

  return (
    <div
      className={`min-h-screen pt-20 pb-10 transition-all duration-300
      ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}
      bg-[#FAFAFA]`}
    >
      <style>{getToggleCSSVariables()}</style>
      <div className="px-4 md:px-8 space-y-6">

        {/* Back Button */}
        <button
          onClick={() => navigate('/dashboard')}
          style={{ color: theme.primary }}
          className="flex items-center gap-2 hover:opacity-80
          font-medium transition"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>

        {/* ================= HEADER ================= */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
            <p className="text-slate-600 mt-1">
              Manage your preferences and account settings
            </p>
          </div>
        </div>

        {/* Save Message */}
        {saveMessage && (
          <div className="bg-emerald-100 border border-emerald-300 text-emerald-700 px-4 py-3 rounded-lg">
            {saveMessage}
          </div>
        )}

        {/* ================= NOTIFICATION SETTINGS ================= */}
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Bell className="text-blue-600" size={20} />
            </div>
            <h2 className="text-lg font-semibold text-slate-900">Notifications</h2>
          </div>

          <div className="space-y-4">
            {/* Email Notifications */}
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <p className="font-medium text-slate-900">Email Notifications</p>
                <p className="text-sm text-slate-600">Receive updates via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.emailNotifications}
                  onChange={() => handleToggle('emailNotifications')}
                  className="sr-only peer theme-toggle"
                />
                <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all" style={{ backgroundColor: settings.emailNotifications ? theme.primary : '#cbd5e1' }}></div>
              </label>
            </div>

            {/* Push Notifications */}
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <p className="font-medium text-slate-900">Push Notifications</p>
                <p className="text-sm text-slate-600">Receive browser notifications</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.pushNotifications}
                  onChange={() => handleToggle('pushNotifications')}
                  className="sr-only peer theme-toggle"
                />
                <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all" style={{ backgroundColor: settings.pushNotifications ? theme.primary : '#cbd5e1' }}></div>
              </label>
            </div>

            {/* Maintenance Alerts */}
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <p className="font-medium text-slate-900">Maintenance Alerts</p>
                <p className="text-sm text-slate-600">Get notified about maintenance tasks</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.maintenanceAlerts}
                  onChange={() => handleToggle('maintenanceAlerts')}
                  className="sr-only peer theme-toggle"
                />
                <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all" style={{ backgroundColor: settings.maintenanceAlerts ? theme.primary : '#cbd5e1' }}></div>
              </label>
            </div>

            {/* Weekly Reports */}
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <p className="font-medium text-slate-900">Weekly Reports</p>
                <p className="text-sm text-slate-600">Receive weekly summary reports</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.weeklyReport}
                  onChange={() => handleToggle('weeklyReport')}
                  className="sr-only peer theme-toggle"
                />
                <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all" style={{ backgroundColor: settings.weeklyReport ? theme.primary : '#cbd5e1' }}></div>
              </label>
            </div>
          </div>
        </div>

        {/* ================= DISPLAY SETTINGS ================= */}
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
              <Eye className="text-purple-600" size={20} />
            </div>
            <h2 className="text-lg font-semibold text-slate-900">Display</h2>
          </div>

          <div className="space-y-4">
            {/* Dark Mode */}
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <p className="font-medium text-slate-900">Dark Mode</p>
                <p className="text-sm text-slate-600">Use dark theme for the application</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.darkMode}
                  onChange={() => handleToggle('darkMode')}
                  className="sr-only peer theme-toggle"
                />
                <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all" style={{ backgroundColor: settings.darkMode ? theme.primary : '#cbd5e1' }}></div>
              </label>
            </div>

            {/* Language */}
            <div className="p-4 bg-slate-50 rounded-lg">
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Language
              </label>
              <select
                value={settings.language}
                onChange={(e) => handleSelectChange('language', e.target.value)}
                style={{ borderColor: theme.primary, boxShadow: `0 0 0 0px ${theme.light}` }}
                className="w-full px-3 py-2 border rounded-lg outline-none
                focus:ring-2"
                onFocus={(e) => e.target.style.boxShadow = `0 0 0 3px ${theme.light}`}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
              >
                <option value="en">English</option>
                <option value="ar">العربية</option>
                <option value="so">Somali</option>
                <option value="fr">Français</option>
              </select>
            </div>

            {/* Theme Color */}
            <div className="p-4 bg-slate-50 rounded-lg">
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Theme Color
              </label>
              <div className="flex gap-3">
                {['orange', 'blue', 'green', 'purple'].map(color => (
                  <button
                    key={color}
                    onClick={() => changeTheme(color)}
                    className={`w-10 h-10 rounded-lg transition-transform ${
                      color === 'orange' ? 'bg-orange-600' :
                      color === 'blue' ? 'bg-blue-600' :
                      color === 'green' ? 'bg-green-600' :
                      'bg-purple-600'
                    } ${themeColor === color ? 'ring-2 ring-offset-2 ring-slate-400 scale-110' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= SOUND SETTINGS ================= */}
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <Volume2 className="text-green-600" size={20} />
            </div>
            <h2 className="text-lg font-semibold text-slate-900">Sound</h2>
          </div>

          <div className="space-y-4">
            {/* Sound Enabled */}
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <p className="font-medium text-slate-900">Sound Effects</p>
                <p className="text-sm text-slate-600">Enable sound notifications</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.soundEnabled}
                  onChange={() => handleToggle('soundEnabled')}
                  className="sr-only peer theme-toggle"
                />
                <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all" style={{ backgroundColor: settings.soundEnabled ? theme.primary : '#cbd5e1' }}></div>
              </label>
            </div>

            {/* Volume Control */}
            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-slate-900">
                  Volume
                </label>
                <span className="text-sm font-semibold text-orange-600">{settings.volume}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={settings.volume}
                onChange={handleSliderChange}
                disabled={!settings.soundEnabled}
                style={{ accentColor: theme.primary }}
                className="w-full h-2 bg-slate-300 rounded-lg outline-none
                disabled:opacity-50"
              />
            </div>
          </div>
        </div>

        {/* ================= SECURITY SETTINGS ================= */}
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
              <Lock className="text-red-600" size={20} />
            </div>
            <h2 className="text-lg font-semibold text-slate-900">Security</h2>
          </div>

          <div className="space-y-4">
            {/* Two Factor Auth */}
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <p className="font-medium text-slate-900">Two-Factor Authentication</p>
                <p className="text-sm text-slate-600">Add extra security to your account</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.twoFactorAuth}
                  onChange={() => handleToggle('twoFactorAuth')}
                  className="sr-only peer theme-toggle"
                />
                <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all" style={{ backgroundColor: settings.twoFactorAuth ? theme.primary : '#cbd5e1' }}></div>
              </label>
            </div>

            {/* Public Profile */}
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <p className="font-medium text-slate-900">Public Profile</p>
                <p className="text-sm text-slate-600">Make your profile visible to others</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.publicProfile}
                  onChange={() => handleToggle('publicProfile')}
                  className="sr-only peer theme-toggle"
                />
                <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all" style={{ backgroundColor: settings.publicProfile ? theme.primary : '#cbd5e1' }}></div>
              </label>
            </div>
          </div>
        </div>

        {/* ================= SAVE BUTTON ================= */}
        <div className="flex justify-end">
          <button
            onClick={handleSaveSettings}
            style={{ backgroundColor: theme.primary }}
            className="flex items-center gap-2 px-6 py-3
            text-white rounded-lg hover:opacity-90 transition
            font-medium shadow-md"
          >
            <Save size={20} />
            Save Settings
          </button>
        </div>

      </div>
    </div>
  );
};

export default SettingsPage;

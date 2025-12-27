import React from 'react';
import { Link } from 'react-router-dom';
import { LogOut, User, Settings, Menu, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const getRoleColors = (role) => {
    const roleMap = {
      'admin': { bg: 'bg-gradient-to-br from-red-500 to-red-600', badge: 'bg-red-100 text-red-700' },
      'manager': { bg: 'bg-gradient-to-br from-blue-500 to-blue-600', badge: 'bg-blue-100 text-blue-700' },
      'technician': { bg: 'bg-gradient-to-br from-green-500 to-green-600', badge: 'bg-green-100 text-green-700' },
      'engineer': { bg: 'bg-gradient-to-br from-purple-500 to-purple-600', badge: 'bg-purple-100 text-purple-700' },
    };
    return roleMap[role?.toLowerCase()] || { bg: 'bg-gradient-to-br from-primary-500 to-primary-600', badge: 'bg-primary-100 text-primary-700' };
  };

  const roleColors = getRoleColors(user?.role);

  const handleLogout = async () => {
    await logout();
    window.location.href = '/login';
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-40">
      <div className="h-full px-4 md:px-6 flex items-center justify-between">
        {/* Logo & Sidebar Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="hidden md:flex p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-600"
            title="Toggle Sidebar"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link to="/dashboard" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-slate-900">Maintenance ERP</h1>
              <p className="text-xs text-slate-500">Enterprise System</p>
            </div>
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all hover:shadow-md border-2 border-transparent ${roleColors.badge}`}
            >
              <div className={`w-8 h-8 rounded-lg ${roleColors.bg} flex items-center justify-center text-white text-sm font-bold`}>
                {user?.name?.charAt(0)?.toUpperCase() || 'U'}
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-semibold text-slate-900">{user?.name || 'User'}</p>
                <p className="text-xs font-medium uppercase tracking-wider">{user?.role || 'Admin'}</p>
              </div>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                <Link
                  to="/profile"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <User size={16} />
                  Profile
                </Link>
                <Link
                  to="/settings"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <Settings size={16} />
                  Settings
                </Link>
                <hr className="my-2 border-slate-200" />
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

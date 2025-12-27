import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Edit2, LogOut } from 'lucide-react';
import { useSidebar } from '../../context/SidebarContext';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

const UserProfile = () => {
  const { isSidebarOpen } = useSidebar();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { user: currentUser, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  // Mock user profile data - in real app, fetch from backend based on user.id
  const userProfiles = {
    '1': {
      id: 1,
      name: 'Ahmed Hassan',
      email: 'ahmed@example.com',
      phone: '0712345678',
      role: 'admin',
      department: 'Management',
      status: 'active',
      joinDate: '2024-01-15',
      lastLogin: '2024-12-27',
      avatar: 'AH',
      bio: 'System Administrator',
      address: 'Mogadishu, Somalia',
      permissions: ['Create Users', 'Manage Equipment', 'Manage Teams', 'View Reports', 'System Settings'],
    },
    '2': {
      id: 2,
      name: 'Fatima Ali',
      email: 'fatima@example.com',
      phone: '0723456789',
      role: 'manager',
      department: 'Operations',
      status: 'active',
      joinDate: '2024-02-20',
      lastLogin: '2024-12-27',
      avatar: 'FA',
      bio: 'Operations Manager',
      address: 'Mogadishu, Somalia',
      permissions: ['View Users', 'Manage Equipment', 'Create Maintenance', 'View Reports'],
    },
    '3': {
      id: 3,
      name: 'Mohamed Ibrahim',
      email: 'mohamed@example.com',
      phone: '0734567890',
      role: 'technician',
      department: 'Maintenance',
      status: 'active',
      joinDate: '2024-03-10',
      lastLogin: '2024-12-26',
      avatar: 'MI',
      bio: 'Maintenance Technician',
      address: 'Mogadishu, Somalia',
      permissions: ['View Assigned Tasks', 'Update Maintenance Status', 'Submit Reports'],
    },
    '4': {
      id: 4,
      name: 'Amina Hassan',
      email: 'amina@example.com',
      phone: '0745678901',
      role: 'technician',
      department: 'Maintenance',
      status: 'active',
      joinDate: '2024-03-15',
      lastLogin: '2024-12-27',
      avatar: 'AH',
      bio: 'Maintenance Technician',
      address: 'Mogadishu, Somalia',
      permissions: ['View Assigned Tasks', 'Update Maintenance Status', 'Submit Reports'],
    },
  };

  // Get current user's profile or use default profile
  const userProfile = userProfiles[currentUser?.id] || {
    id: currentUser?.id || 'unknown',
    name: currentUser?.name || 'User',
    email: currentUser?.email || 'user@example.com',
    phone: currentUser?.phone || '0000000000',
    role: currentUser?.role || 'technician',
    department: currentUser?.department || 'Maintenance',
    status: 'active',
    joinDate: new Date().toISOString().split('T')[0],
    lastLogin: new Date().toISOString().split('T')[0],
    avatar: currentUser?.name?.substring(0, 2).toUpperCase() || 'U',
    bio: 'User Profile',
    address: 'Somalia',
    permissions: ['View Assigned Tasks'],
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'admin':
        return 'bg-red-100 text-red-700';
      case 'manager':
        return 'bg-blue-100 text-blue-700';
      case 'technician':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status) => {
    return status === 'active'
      ? 'bg-emerald-100 text-emerald-700'
      : 'bg-slate-100 text-slate-700';
  };

  const handleLogout = async () => {
    await logout();
    window.location.href = '/login';
  };

  return (
    <div
      className={`min-h-screen pt-20 pb-10 transition-all duration-300
      ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}
      bg-[#FAFAFA]`}
    >
      <div className="px-4 md:px-8 space-y-6">

        {/* Back Button */}
        <button
          onClick={() => navigate('/dashboard')}
          style={{ color: theme.primary }}
          className="flex items-center gap-2 hover:opacity-70
          font-medium transition"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>

        {/* ================= HEADER CARD ================= */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              {/* Avatar */}
              <div
                style={{
                  backgroundColor: theme.primary,
                }}
                className="w-24 h-24 rounded-full text-white
              flex items-center justify-center font-bold text-4xl shadow-lg"
              >
                {userProfile.avatar}
              </div>

              {/* User Info */}
              <div>
                <h1 className="text-3xl font-bold text-slate-900">{userProfile.name}</h1>
                <p className="text-slate-600 mt-1">{userProfile.bio}</p>
                
                <div className="flex flex-wrap gap-3 mt-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getRoleColor(userProfile.role)}`}>
                    {userProfile.role.charAt(0).toUpperCase() + userProfile.role.slice(1)}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(userProfile.status)}`}>
                    {userProfile.status.charAt(0).toUpperCase() + userProfile.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 w-full md:w-auto">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2
                bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              >
                <Edit2 size={18} />
                Edit Profile
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2
                bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* ================= CONTACT & DETAILS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Contact Information */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-600 uppercase">Email</p>
                  <p className="font-medium text-slate-900">{userProfile.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                  <Phone className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-600 uppercase">Phone</p>
                  <p className="font-medium text-slate-900">{userProfile.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                  <MapPin className="text-purple-600" size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-600 uppercase">Location</p>
                  <p className="font-medium text-slate-900">{userProfile.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Account Details */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Account Details</h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-xs text-slate-600 uppercase font-semibold">Department</p>
                <p className="font-medium text-slate-900 mt-1">{userProfile.department}</p>
              </div>

              <div>
                <p className="text-xs text-slate-600 uppercase font-semibold">Join Date</p>
                <p className="font-medium text-slate-900 mt-1">
                  {new Date(userProfile.joinDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-600 uppercase font-semibold">Last Login</p>
                <p className="font-medium text-slate-900 mt-1">
                  {new Date(userProfile.lastLogin).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PERMISSIONS ================= */}
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Permissions</h2>
          
          <div className="flex flex-wrap gap-2">
            {userProfile.permissions.map((perm, idx) => (
              <span
                key={idx}
                style={{
                  backgroundColor: theme.light,
                  color: theme.primary,
                }}
                className="px-3 py-1 rounded-full
                text-sm font-medium"
              >
                {perm}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserProfile;

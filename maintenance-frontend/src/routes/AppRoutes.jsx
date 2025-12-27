import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SidebarContext from '../context/SidebarContext';
import ProtectedRoute from '../components/common/ProtectedRoute';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';

// Auth Pages
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';

// Dashboard
import Dashboard from '../pages/dashboard/Dashboard';

// Equipment
import EquipmentList from '../pages/equipment/EquipmentList';
import EquipmentDetails from '../pages/equipment/EquipmentDetails';

// Maintenance
import CreateRequest from '../pages/maintenance/CreateRequest';
import KanbanPage from '../pages/maintenance/KanbanPage';
import CalendarPage from '../pages/maintenance/CalendarPage';

// Teams
import TeamPage from '../pages/teams/TeamPage';

// Work Center
import WorkCenter from '../pages/workcenter/WorkCenter';

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      <>
        {isAuthenticated && (
          <>
            <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          </>
        )}

      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Equipment Routes */}
        <Route
          path="/equipment"
          element={
            <ProtectedRoute>
              <EquipmentList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/equipment/:id"
          element={
            <ProtectedRoute>
              <EquipmentDetails />
            </ProtectedRoute>
          }
        />

        {/* Maintenance Routes */}
        <Route
          path="/maintenance/requests"
          element={
            <ProtectedRoute>
              <CreateRequest />
            </ProtectedRoute>
          }
        />
        <Route
          path="/maintenance/kanban"
          element={
            <ProtectedRoute>
              <KanbanPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/maintenance/calendar"
          element={
            <ProtectedRoute>
              <CalendarPage />
            </ProtectedRoute>
          }
        />

        {/* Teams Route */}
        <Route
          path="/teams"
          element={
            <ProtectedRoute>
              <TeamPage />
            </ProtectedRoute>
          }
        />

        {/* Work Center Route */}
        <Route
          path="/workcenter"
          element={
            <ProtectedRoute>
              <WorkCenter />
            </ProtectedRoute>
          }
        />

        {/* Default Route */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
    </SidebarContext.Provider>
  );
};

export default AppRoutes;

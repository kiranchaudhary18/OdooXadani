import axiosInstance from './axios';

// Demo credentials for testing
const DEMO_CREDENTIALS = [
  {
    email: 'admin@maintenance.com',
    password: 'admin123',
    user: {
      id: 1,
      name: 'Admin User',
      email: 'admin@maintenance.com',
      role: 'Admin',
      company: 'Maintenance ERP',
    },
  },
  {
    email: 'manager@maintenance.com',
    password: 'manager123',
    user: {
      id: 2,
      name: 'Manager User',
      email: 'manager@maintenance.com',
      role: 'Manager',
      company: 'Maintenance ERP',
    },
  },
  {
    email: 'tech@maintenance.com',
    password: 'tech123',
    user: {
      id: 3,
      name: 'Technician User',
      email: 'tech@maintenance.com',
      role: 'Technician',
      company: 'Maintenance ERP',
    },
  },
];

// Mock login for demo purposes
const mockLogin = async (email, password) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const credential = DEMO_CREDENTIALS.find(
    (c) => c.email === email && c.password === password
  );

  if (!credential) {
    throw {
      response: {
        data: {
          message: 'Invalid email or password. Use demo credentials.',
        },
      },
    };
  }

  return {
    token: `demo-token-${credential.user.id}-${Date.now()}`,
    user: credential.user,
  };
};

// Mock signup for demo purposes
const mockSignup = async (userData) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const newUser = {
    id: Math.random(),
    name: userData.name,
    email: userData.email,
    role: userData.role,
    company: userData.company,
  };

  return {
    token: `demo-token-${newUser.id}-${Date.now()}`,
    user: newUser,
  };
};

// Mock getMe for demo purposes
const mockGetMe = async () => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    throw {
      response: {
        data: {
          message: 'No token found',
        },
      },
    };
  }

  // Parse token to get user ID (demo implementation)
  const tokenParts = token.split('-');
  const userId = parseInt(tokenParts[2]);

  const credential = DEMO_CREDENTIALS.find((c) => c.user.id === userId);
  if (credential) {
    return { user: credential.user };
  }

  // For signup users, return a mock user
  return {
    user: {
      id: userId,
      name: 'Demo User',
      email: 'demo@maintenance.com',
      role: 'Technician',
      company: 'Maintenance ERP',
    },
  };
};

export const authAPI = {
  login: async (email, password) => {
    try {
      const response = await axiosInstance.post('/auth/login', { email, password });
      return response.data;
    } catch (error) {
      // Fall back to mock login if backend is not available
      if (!error.response || error.response.status === 0) {
        return mockLogin(email, password);
      }
      throw error;
    }
  },

  signup: async (userData) => {
    try {
      const response = await axiosInstance.post('/auth/signup', userData);
      return response.data;
    } catch (error) {
      // Fall back to mock signup if backend is not available
      if (!error.response || error.response.status === 0) {
        return mockSignup(userData);
      }
      throw error;
    }
  },

  logout: async () => {
    try {
      const response = await axiosInstance.post('/auth/logout');
      return response.data;
    } catch (error) {
      // Mock logout doesn't need backend
      return { message: 'Logged out' };
    }
  },

  getMe: async () => {
    try {
      const response = await axiosInstance.get('/auth/me');
      return response.data;
    } catch (error) {
      // Fall back to mock getMe if backend is not available
      if (!error.response || error.response.status === 0) {
        return mockGetMe();
      }
      throw error;
    }
  },

  // Demo credentials getter
  getDemoCredentials: () => DEMO_CREDENTIALS,
};

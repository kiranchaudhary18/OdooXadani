import axiosInstance from './axios';

export const authAPI = {
  register: async (userData) => {
    const response = await axiosInstance.post('/auth/register', userData);
    return response.data;
  },

  login: async (email, password) => {
    const response = await axiosInstance.post('/auth/login', { email, password });
    return response.data;
  },

  logout: async () => {
    // Clear token from localStorage
    localStorage.removeItem('authToken');
    return { message: 'Logged out' };
  },

  getMe: async () => {
    const response = await axiosInstance.get('/auth/me');
    return response.data;
  },
};

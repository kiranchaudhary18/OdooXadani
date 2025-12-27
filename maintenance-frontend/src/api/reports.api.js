import axiosInstance from './axios';

export const reportsAPI = {
  getDashboard: async () => {
    const response = await axiosInstance.get('/reports/dashboard');
    return response.data;
  },

  getRequestsByTeam: async (filters = {}) => {
    const response = await axiosInstance.get('/reports/requests-by-team', { params: filters });
    return response.data;
  },

  getRequestsByEquipment: async (filters = {}) => {
    const response = await axiosInstance.get('/reports/requests-by-equipment', { params: filters });
    return response.data;
  },
};


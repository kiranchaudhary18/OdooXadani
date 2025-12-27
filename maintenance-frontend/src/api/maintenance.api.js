import axiosInstance from './axios';

export const maintenanceAPI = {
  getAll: async (filters = {}) => {
    const response = await axiosInstance.get('/maintenance', { params: filters });
    return response.data;
  },

  getById: async (id) => {
    const response = await axiosInstance.get(`/maintenance/${id}`);
    return response.data;
  },

  create: async (maintenanceData) => {
    const response = await axiosInstance.post('/maintenance', maintenanceData);
    return response.data;
  },

  update: async (id, maintenanceData) => {
    const response = await axiosInstance.put(`/maintenance/${id}`, maintenanceData);
    return response.data;
  },

  updateStatus: async (id, status) => {
    const response = await axiosInstance.patch(`/maintenance/${id}/status`, { status });
    return response.data;
  },

  delete: async (id) => {
    const response = await axiosInstance.delete(`/maintenance/${id}`);
    return response.data;
  },

  getByStatus: async (status) => {
    const response = await axiosInstance.get('/maintenance', { params: { status } });
    return response.data;
  },

  getCalendarEvents: async (startDate, endDate) => {
    const response = await axiosInstance.get('/maintenance/calendar', {
      params: { startDate, endDate },
    });
    return response.data;
  },
};

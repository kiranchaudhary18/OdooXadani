import axiosInstance from './axios';

export const maintenanceAPI = {
  getAll: async (filters = {}) => {
    const response = await axiosInstance.get('/maintenance', { params: filters });
    return response.data;
  },

  create: async (maintenanceData) => {
    const response = await axiosInstance.post('/maintenance', maintenanceData);
    return response.data;
  },

  assignTechnician: async (id, technicianId) => {
    const response = await axiosInstance.patch(`/maintenance/${id}/assign`, { technicianId });
    return response.data;
  },

  updateStatus: async (id, status) => {
    const response = await axiosInstance.patch(`/maintenance/${id}/status`, { status });
    return response.data;
  },

  complete: async (id, completionData = {}) => {
    const response = await axiosInstance.patch(`/maintenance/${id}/complete`, completionData);
    return response.data;
  },

  getCalendar: async (filters = {}) => {
    const response = await axiosInstance.get('/maintenance/calendar', { params: filters });
    return response.data;
  },
};

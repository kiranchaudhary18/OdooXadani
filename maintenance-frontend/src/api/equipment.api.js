import axiosInstance from './axios';

export const equipmentAPI = {
  getAll: async (filters = {}) => {
    const response = await axiosInstance.get('/equipment', { params: filters });
    return response.data;
  },

  getById: async (id) => {
    const response = await axiosInstance.get(`/equipment/${id}`);
    return response.data;
  },

  create: async (equipmentData) => {
    const response = await axiosInstance.post('/equipment', equipmentData);
    return response.data;
  },

  update: async (id, equipmentData) => {
    const response = await axiosInstance.patch(`/equipment/${id}`, equipmentData);
    return response.data;
  },

  scrap: async (id) => {
    const response = await axiosInstance.patch(`/equipment/${id}/scrap`);
    return response.data;
  },

  getMaintenance: async (id) => {
    const response = await axiosInstance.get(`/equipment/${id}/maintenance`);
    return response.data;
  },
};

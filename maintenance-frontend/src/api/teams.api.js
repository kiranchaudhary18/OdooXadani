import axiosInstance from './axios';

export const teamsAPI = {
  getAll: async () => {
    const response = await axiosInstance.get('/teams');
    return response.data;
  },

  getById: async (id) => {
    const response = await axiosInstance.get(`/teams/${id}`);
    return response.data;
  },

  create: async (teamData) => {
    const response = await axiosInstance.post('/teams', teamData);
    return response.data;
  },

  addMember: async (teamId, memberId) => {
    const response = await axiosInstance.post(`/teams/${teamId}/add-member`, { memberId });
    return response.data;
  },

  removeMember: async (teamId, memberId) => {
    const response = await axiosInstance.post(`/teams/${teamId}/remove-member`, { memberId });
    return response.data;
  },
};


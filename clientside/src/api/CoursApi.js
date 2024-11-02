import axiosClient from "./axiosClient";

const CoursApi = {
  create: async (data) => {
    return await axiosClient.post('/api/courss', data);
  },
  getAll: async () => {
    return await axiosClient.get('/api/courss');
  },
  getById: async (id) => {
    return await axiosClient.get(`/api/courss/${id}`);
  },
  update: async (id, data) => {
    return await axiosClient.put(`/api/courss/${id}`, data);
  },
  delete: async (id) => {
    return await axiosClient.delete(`/api/courss/${id}`);
  }
};

export default CoursApi;

import axiosClient from "./axiosClient";

const BlogApi = {
  create: async (data) => {
    return await axiosClient.post('/api/blogs', data);
  },
  getAll: async () => {
    return await axiosClient.get('/api/blogs');
  },
  getById: async (id) => {
    return await axiosClient.get(`/api/blogs/${id}`);
  },
  update: async (id, data) => {
    return await axiosClient.put(`/api/blogs/${id}`, data);
  },
  delete: async (id) => {
    return await axiosClient.delete(`/api/blogs/${id}`);
  }
};

export default BlogApi;

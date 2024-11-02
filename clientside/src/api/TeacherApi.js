

const TeacherApi = {
  create: async (data) => {
    return await axiosClient.post('/api/teachers', data);
  },
  getAll: async () => {
    return await axiosClient.get('/api/teachers');
  },
  getById: async (id) => {
    return await axiosClient.get(`/api/teachers/${id}`);
  },
  update: async (id, data) => {
    return await axiosClient.put(`/api/teachers/${id}`, data);
  },
  delete: async (id) => {
    return await axiosClient.delete(`/api/teachers/${id}`);
  }
};

export default TeacherApi;

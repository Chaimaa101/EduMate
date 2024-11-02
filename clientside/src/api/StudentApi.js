
import axiosClient from './axiosClient';

const StudentApi = {
   create: async (data) => {
      return await axiosClient.post("/api/students", data);
   },
   getAll: async () => {
      return await axiosClient.get("/api/students");
   },
   getById: async (id) => {
      return await axiosClient.get(`/api/students/${id}`);
   },
   update: async (id, data) => {
      return await axiosClient.put(`/api/students/${id}`, data);
   },
   delete: async (id) => {
      return await axiosClient.delete(`/api/students/${id}`);
   },
};

export default StudentApi;

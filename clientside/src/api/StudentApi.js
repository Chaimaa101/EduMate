// src/api/studentApi.js
import axios from "axios";

const BASE_URL = "http://localhost:8000/api/students";

const studentApi = {
   fetchStudents: () => axios.get(BASE_URL),
   deleteStudent: (id) => axios.delete(`${BASE_URL}/${id}`),
   editStudent: (id, studentData) => axios.put(`${BASE_URL}/${id}`, studentData),
   addStudent: (studentData) => axios.post(BASE_URL, studentData),
};

export default studentApi;

import axios from "axios";

const API_BASE_URL = "http://localhost:8002/";

const UserApi = {
  getAllUsers: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}auth/all`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default UserApi;

import axios from "axios";
const API_BASE_URL = "http://localhost:8000/";
const LogoutService = {
  signout: async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}auth/logout`, null, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default LogoutService;

import axios from "axios";

<<<<<<< HEAD
const API_BASE_URL = "https://makseb.onrender.com/";
=======
const API_BASE_URL = "/";
>>>>>>> 74210047b9894ec647565ca525be40d429da9a48

const LivestatsService = {
  getLivestats: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}livestats`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  checkBackend: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}livestats`, {
        withCredentials: true,
      });
      
      if (response.status === 200) {
        console.log(response.status);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  },
};

export default LivestatsService;

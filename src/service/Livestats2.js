import axios from "axios";

<<<<<<< HEAD
const API_BASE_URL = "https://makseb.onrender.com/";
=======
const API_BASE_URL = "/";
>>>>>>> 74210047b9894ec647565ca525be40d429da9a48

const Livestats2 = {
  getLivestats2: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}livestats2`, {
        withCredentials: true,
      });
       // Corrected line
      return response.data;
      
    } catch (error) {
      throw error;
    }
  },
};

export default Livestats2;

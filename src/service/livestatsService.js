import axios from "axios";
import Cookies from "js-cookie";

const API_BASE_URL = "https://makseb.onrender.com/";

const LivestatsService = {
  
  getLivestats: async () => {

    try {
      const idCRM = Cookies.get("idCRM");
      console.log("bbbbbbb",idCRM);
      const response = await axios.get(`${API_BASE_URL}livestats`, {
        withCredentials: true,  

        params: {
          idCRM: idCRM,
        },
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

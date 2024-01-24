import axios from "axios";
import Cookies from "js-cookie";

const API_BASE_URL = "https://makseb.onrender.com/";

const Livestats2 = {
  getLivestats2: async () => {
    try {

       const idCRM = Cookies.get("idCRM");
 console.log("aaaaaaa",idCRM);
      const response = await axios.get(`${API_BASE_URL}livestats2`, {
        withCredentials: true,
         
  params: {
    idCRM: idCRM,
  },
      });
       // Corrected line
      return response.data;
      
    } catch (error) {
      throw error;
    }
  },
};

export default Livestats2;

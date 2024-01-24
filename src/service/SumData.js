import axios from "axios";
import Cookies from "js-cookie";

const API_BASE_URL = "http://localhost:8002/";

const SumData = {

 
  getLivestatByIdandDate: async (date1, date2) => {
    const idCRM = Cookies.get("idCRM");
    console.log("l1",idCRM)

    try {
      const response = await axios.get(`${API_BASE_URL}SumData`, {
        params: {
          date1,
          date2,
          idCRM: idCRM,

        },
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default SumData;

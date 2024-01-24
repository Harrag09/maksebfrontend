import axios from "axios";
import Cookies from "js-cookie";

const API_BASE_URL = "http://localhost:8002/";


const AuthService = {
  signin: async (loginData) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}auth/signin`,
        loginData,
        {
          withCredentials: true,
        }
      );
      Cookies.set("access_token", response.data.data.access_token);
      Cookies.set("loggedIn", "loggedIn");
      Cookies.set("idCRM", response.data.data.idCRM);
      Cookies.set("idUser", response.data.data.userid); 
      console.log('Signin Response:', response.data.data.access_token);
      return response.data;
    } catch (error) {
      console.error('Error during signin:', error);
      throw error;
    }
  },



  getUserById: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}auth/user`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  signup: async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}auth/signup`, userData);
        if (response.data.success) {
          return true ;
        } else {
          return false;
        }
       
    } catch (error) {
        throw error;
    }
},
  
 
};

export default AuthService;   
import axios from 'axios';

<<<<<<< HEAD
const API_BASE_URL = "https://makseb.onrender.com/";
=======
const API_BASE_URL = "/"; // Replace with your actual API URL
>>>>>>> 74210047b9894ec647565ca525be40d429da9a48

export const signup = async (userData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}auth/signup`,
      userData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

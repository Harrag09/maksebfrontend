import axios from 'axios';

const API_BASE_URL = "https://makseb.onrender.com/";

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

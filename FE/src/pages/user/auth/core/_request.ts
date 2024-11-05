import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;

const signIn = async (data: any): Promise<any> => {
  const response = await axios.post(`${API_URL}/users/login`, data);
  return response.data;
};

const signUp = async (data: any): Promise<any> => {
  const response = await axios.post(`${API_URL}/users/register`, data);
  return response.data;
};

export { signIn, signUp };

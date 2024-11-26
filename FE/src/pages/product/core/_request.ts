import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;

const filterProduct = async (data?: any): Promise<any> => {
  const response = await axios.get(`${API_URL}/products`, data);
  return response.data;
};

export { filterProduct };

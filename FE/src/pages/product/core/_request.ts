import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;

const filterProduct = async (params?: any): Promise<any> => {
  const response = await axios.get(`${API_URL}/products`, { params });
  return response.data;
};

const bestSellingProduct = async (): Promise<any> => {
  const response = await axios.get(`${API_URL}/products/best-selling`);
  return response.data;
};

const latestArrivalProduct = async (): Promise<any> => {
  const response = await axios.get(`${API_URL}/products/latest-arrivals`);
  return response.data;
};

export { filterProduct, bestSellingProduct, latestArrivalProduct };

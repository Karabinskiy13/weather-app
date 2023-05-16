import axios, { AxiosResponse, AxiosError } from 'axios';
import { baseURL, pathURL } from '../urls/urls';

const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    return await Promise.reject(error);
  }
);
export default axiosInstance;

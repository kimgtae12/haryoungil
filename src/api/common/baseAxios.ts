import axios from "axios";
import { useTokenStore } from "store/TokentStore";

export const baseUrl = process.env.REACT_APP_BASE_URL;
const apiVer = "/blue_sales";

export const baseAxios = axios.create({
  baseURL: baseUrl + apiVer,
  timeout: 10000,
});

//토큰 업데이트
baseAxios.interceptors.request.use(
  (config) => {
    const token = useTokenStore.getState().token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

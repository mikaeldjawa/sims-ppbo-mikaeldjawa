import { LS_TOKEN } from "@/utils/constants";
import Axios from "axios";

const baseURL = import.meta.env.VITE_BASE_API_URL;

const axios = Axios.create({
  baseURL,
});

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem(LS_TOKEN);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  config.headers["Content-Type"] = "application/json";

  return config;
});

export default axios;

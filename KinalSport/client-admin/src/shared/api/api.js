import axios from "axios";

const axiosAuth = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
});

export { axiosAuth }

import axios from "axios";

// const API = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export default api;
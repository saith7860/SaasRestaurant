
import axios from "axios";
import {
  getAccessToken,
  setAccessToken,
  clearAccessToken,
} from "./tokenStore";
const hostname=window.location.hostname;
const api = axios.create({
  baseURL: `http://${hostname}:3000`,
  withCredentials: true,
});

// Har request ke sath access token attach hoga
api.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Agar access token expire ho jaye, refresh token se new access token lo
api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/refresh-token") &&
      !originalRequest.url.includes("/login")
    ) {
      originalRequest._retry = true;

      try {
        const res = await api.post("/api/user/refresh-token");

        const newAccessToken = res.data.token;

        setAccessToken(newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        clearAccessToken();

        // Optional: user ko login page par bhej do
        window.location.href = "/login";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
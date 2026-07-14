
import axios from "axios";
import { getAccessToken } from "./tokenStore";
import { refreshAccessToken } from "./authApi";
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// Har request ke sath access token attach hoga
api.interceptors.request.use((config) => {
 const accessToken=getAccessToken();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
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
        
        const token=await refreshAccessToken();
        originalRequest.headers.Authorization = `Bearer ${token}`;

        return api(originalRequest);
      } catch (refreshError) {
        // Optional: user ko login page par bhej do
        window.location.href = "/login";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
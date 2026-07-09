import api from "../api/api";
import { clearAccessToken } from "../api/tokenStore";

export const logout = async (navigate: any) => {
  try {
    await api.post("/api/user/logout");
  } catch (err) {
    console.error(err);
  }

  clearAccessToken();
  localStorage.removeItem("token");
  navigate("/login");
};
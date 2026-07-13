import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { setAccessToken } from "../api/tokenStore";
import { jwtDecode } from "jwt-decode";
import api from "../api/api";

type User = {
  id: string;
  role: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  refreshAccessToken: () => Promise<string | null>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  

  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  // const refreshAccessToken = async () => {
  //   try {
  //     const res = await api.post("/api/user/refresh-token");

  //     const token = res.data.token;

  //     setAccessToken(token);

  //     const decoded: User = jwtDecode(token);

  //     setUser(decoded);

  //     return token;
  //   } catch (err) {
  //     console.log(err);

  //     setAccessToken(null);

  //     setUser(null);

  //     return null;
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const refreshAccessToken = async () => {
  try {
    console.log("Refreshing access token...");

    const res = await api.post("/api/user/refresh-token");

    console.log("Refresh response", res.data);

    const token = res.data.token;

    const decoded:User = jwtDecode(token);

    console.log("Decoded refresh token", decoded);

    setAccessToken(token);

    setUser(decoded);

    return token;
  } catch (err) {
    console.log(err);

    setAccessToken(null);
    setUser(null);

    return null;
  } finally {
    setLoading(false);
  }
};
  const logout = () => {
    setAccessToken(null);

    setUser(null);
  };

  useEffect(() => {
    refreshAccessToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        refreshAccessToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error("useAuth must be used inside AuthProvider");

  return context;
};
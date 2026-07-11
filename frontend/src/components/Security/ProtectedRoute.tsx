import { Navigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
const ProtectedAdminRoute = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user,loading } = useAuth();

 if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedAdminRoute;
import { Navigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
const ProtectedSuperAdminRoute = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user,loading } = useAuth();
  console.log("user",user);
 if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  console.log("role",user.role);
  if (user.role !== "super_admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};
 
export default ProtectedSuperAdminRoute;
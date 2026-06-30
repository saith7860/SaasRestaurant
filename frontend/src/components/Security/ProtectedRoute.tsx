import { Navigate } from "react-router";
import {jwtDecode} from "jwt-decode";
import { getAccessToken } from "../../api/tokenStore";
const ProtectedAdminRoute = ({
    children
}: {
    children: React.ReactNode;
}) => {

    const token = getAccessToken();
    console.log(token);
    if (!token) {
        return <Navigate to="/login" />;
    }
  
    let user;

  try {
    user = jwtDecode(token);
  } catch (err) {
    console.log("error is ",err);
    
    return <Navigate to="/login" />;
  }

    console.log(user);

    // not logged in

    // not admin
    if (
    user?.role !==
        "admin"
    ) {
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedAdminRoute;
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contextAPI/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;

import { Navigate } from "react-router-dom";
import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../contextAPI/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { loading, currentUser } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-2 border-dashed rounded-full animate-spin border-blue-500"></div>
      </div>
    );
  }

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
};

// ✅ PropTypes validation
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;

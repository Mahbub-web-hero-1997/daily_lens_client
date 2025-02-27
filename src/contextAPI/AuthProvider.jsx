import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import UseAxiosPublic from "../customHook/UseAxios";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [newses, setNewses] = useState([]);
  const axiosPublic = UseAxiosPublic();
  useEffect(() => {
    axiosPublic.get("/news/all").then((res) => setNewses(res.data.data));
  }, []);

  const authInfo = {
    loading,
    setLoading,
    newses,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;

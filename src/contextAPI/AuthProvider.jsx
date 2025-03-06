import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import UseAxiosPublic from "../customHook/UseAxios";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [newses, setNewses] = useState([]);

  const axiosPublic = UseAxiosPublic();
  // All Newses Api Fetched Here
  useEffect(() => {
    loading;
    axiosPublic.get("/news/all").then((res) => {
      loading;
      setNewses(res.data?.data?.news);
      setLoading(false);
    });
  }, []);

  const authInfo = {
    loading,
    setLoading,
    newses,

    // sports,
    // business,
    // technology,
    // entertainment,
    // jobs,
    // national,
    // world,
    // health,
    // education,
    // politics,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;

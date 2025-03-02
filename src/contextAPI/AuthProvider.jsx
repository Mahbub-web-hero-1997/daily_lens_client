import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import UseAxiosPublic from "../customHook/UseAxios";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [newses, setNewses] = useState([]);
  const [breakings, setBreakings] = useState([]);
  const axiosPublic = UseAxiosPublic();
  // All Newses Api Fetched Here
  useEffect(() => {
    loading;
    axiosPublic.get("/news/all").then((res) => setNewses(res.data.data));
    setLoading(false);
  }, []);
  useEffect(() => {
    loading;
    axiosPublic.get("/news/all").then((res) => {
      const breaking = res.data.data.filter(
        (item) => item.category === "Breaking-News"
      );
      setBreakings(breaking);
    });
    setLoading(false);
  }, []);

  const authInfo = {
    loading,
    setLoading,
    newses,
    breakings,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;

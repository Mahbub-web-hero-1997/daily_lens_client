import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import UseAxiosPublic from "../customHook/UseAxios";
// import UseAxiosPrivate from "../customHook/UseAxiosSecure";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [newses, setNewses] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const axiosPublic = UseAxiosPublic();
  // const axiosPrivate = UseAxiosPrivate();
  // All Newses Api Fetched Here
  useEffect(() => {
    axiosPublic.get("/news/all").then((res) => {
      setNewses(res.data?.data?.news);
      // console.log(res.data?.data.data);
      setLoading(false);
    });
  }, []);
  // Current User Api Fetched Here
  useEffect(() => {
    axiosPublic
      .get("/user/currentUser")
      .then((res) => {
        setCurrentUser(res.data?.data);
        // console.log(res.data);
        setLoading(false);
      })
      .catch(() => {
        setCurrentUser(null);
        setLoading(false);
      });
  }, []);

  const authInfo = {
    loading,
    setLoading,
    newses,
    currentUser,
    setCurrentUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;

import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import UseAxiosPublic from "../customHook/UseAxios";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [newses, setNewses] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const axiosPublic = UseAxiosPublic();

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        // Fetch news
        const newsRes = await axiosPublic.get("/news/all");
        setNewses(newsRes.data?.data?.news || []);
        // Fetch user
        const userRes = await axiosPublic.get("/user/currentUser");
        setCurrentUser(userRes.data?.data);
        // Set admin if user is admin
        setIsAdmin(userRes.data?.data?.role === "admin");
      } catch (err) {
        console.error("Error fetching data:", err);
        setCurrentUser(null);
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };
    fetchInitialData();
  }, []);
  useEffect(() => {
    if (currentUser?.role === "admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [currentUser?.role]);
  const authInfo = {
    loading,
    setLoading,
    newses,
    currentUser,
    isAdmin,
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

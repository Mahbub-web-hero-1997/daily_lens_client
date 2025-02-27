import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/news/all")
      .then((res) => setNews(res.data));
  }, [setNews]);

  const authInfo = {
    loading,
    setLoading,
    news,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;

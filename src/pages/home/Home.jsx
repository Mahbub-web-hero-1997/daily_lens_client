import { useContext } from "react";
import Breaking from "../breakingNews/Breaking";
import { AuthContext } from "../../contextAPI/AuthProvider";

const Home = () => {
  const { news } = useContext(AuthContext);
  console.log(news);
  return <>{<Breaking />}</>;
};

export default Home;

import { useContext } from "react";
import { AuthContext } from "../../contextAPI/AuthProvider";

const Politics = () => {
  const newses = useContext(AuthContext);
  const sports = newses?.newses.filter((news) => news.category === "Sports");
  console.log(newses);
  return (
    <div>
      <h1>This is Politics Page</h1>
    </div>
  );
};

export default Politics;

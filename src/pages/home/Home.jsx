import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../contextAPI/AuthProvider";
import News from "./News";

const Home = () => {
  // const [isSticky, setIsSticky] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsSticky(window.scrollY > 160); // Adjust scroll value if needed
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  const { newses } = useContext(AuthContext);
  console.log(newses);
  return (
    <>
      <div className="flex flex-col md:flex-row scroll-auto ">
        <div
          className={`md:sticky md:w-1/5 top-0 bg-blue-500 h-screen -z-10 order-2 md:order-1  "
          }`}
        ></div>
        <div className="h-screen w-full order-1 md:order-2 grid grid-cols-1 md:grid-cols-3 gap-3 ">
          {newses.map((news) => (
            <News key={news._id} news={news} />
          ))}
        </div>
        <div
          className={`md:sticky md:w-1/5 top-0 bg-red-500 h-screen -z-10 order-2 md:order-3 "
          }`}
        ></div>
      </div>
    </>
  );
};

export default Home;

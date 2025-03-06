import { Link, Outlet } from "react-router-dom";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import { useContext } from "react";
import { AuthContext } from "../contextAPI/AuthProvider";

const Root = () => {
  const newses = useContext(AuthContext);
  const breaking = newses.newses.filter(
    (news) => news.category === "Breaking-News"
  );
  console.log(breaking);
  return (
    <>
      <div className="w-full ">
        <Header />
        <div className="w-full md:w-[98%] mx-auto flex flex-col md:flex-row ">
          <div className="w-full md:w-[20%] h-screen p-2 order-2 md:order-1 sticky top-[calc(4rem+1px)]">
            <h1>Socials</h1>
          </div>
          <div className="w-full md:w-[60%] bg-white overflow-scroll scrollbar-hidden p-2 order-1 md:order-2">
            <Outlet />
          </div>
          <div className="w-full md:w-[20%] h-screen p-2 order-2 md:order-3 sticky top-[calc(4rem+1px)] z-20">
            <h1 className="text-center text-xl font-semibold">Breaking News</h1>
            <hr className="w-full md:w-1/2 mx-auto mt-2 border-gray-400" />
            <div className="flex flex-col gap-2 mt-4">
              {breaking.slice(0, 1).map((news) => (
                <Link
                  title={news.title}
                  key={news._id}
                  to={`/news/${news._id}`}
                  className="block w-full hover:bg-gray-200 transition-all px-4 py-4 text-sm text-gray-800 bg-white rounded-md"
                >
                  <img
                    className="w-full md:h-[200px]"
                    src={news.image}
                    alt=""
                  />
                  <h3 className="text-xl py-2 font-semibold">
                    {news.title.slice(0, 17)}
                  </h3>
                  <p className="text-left">{news.description.slice(0, 100)}</p>
                </Link>
              ))}
              <div>
                {" "}
                {breaking.map((news) => (
                  <Link
                    title={news.title}
                    key={news._id}
                    to={`/news/${news._id}`}
                    className=" w-full hover:bg-gray-200 transition-all px-2 py-3 text-sm text-gray-800 bg-white rounded-md grid grid-cols-2 gap-3  "
                  >
                    <div>
                      <img className="rounded-md" src={news.image} alt="" />
                      <h3 className=" pt-1 font-semibold">{news.title}</h3>
                    </div>
                    <p className="text-left w-full">
                      {news.description.slice(0, 120)}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Root;

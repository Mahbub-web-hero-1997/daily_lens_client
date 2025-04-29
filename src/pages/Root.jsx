import { Link, Outlet } from "react-router-dom";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import { useContext } from "react";
import { AuthContext } from "../contextAPI/AuthProvider";
import SocialLinks from "./shared/SocialLinks";
import NewsLetter from "./shared/NewsLetter";

const Root = () => {
  const { loading, newses } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-2 border-dashed rounded-full animate-spin border-blue-500"></div>
      </div>
    );
  }
  const breaking = newses.filter((news) => news.category === "Breaking-News");
  // console.log(breaking);
  return (
    <>
      <div className="w-full ">
        <Header />
        <div className="w-full md:w-[98%] mx-auto flex flex-col md:flex-row ">
          {/* ********************************************************************
                                                        Left Side Container
                                                        **************************************************************** */}
          <div className="w-full md:w-[20%] h-screen p-2 order-2 md:order-1 md:sticky md:top-[calc(4rem+1px)]">
            <SocialLinks />
            <NewsLetter />
          </div>
          {/* ********************************************************************
                                                        Outlet Container
                                                        **************************************************************** */}
          <div className="w-full md:w-[60%] bg-white overflow-scroll scrollbar-hidden p-2 order-1 md:order-2">
            <Outlet />
          </div>
          {/* ********************************************************************
                                                        Right Side Container
                                                        **************************************************************** */}
          <div className="w-full md:w-[20%] h-screen p-3 order-2 md:order-3 sticky top-[calc(4rem+1px)] z-20 overflow-y-scroll scrollbar-hidden bg-gray-50 border-l border-gray-200">
            <h1 className="text-center text-xl font-bold text-gray-800 animate-bounce">
              Breaking News
            </h1>
            <hr className="w-1/2 mx-auto mt-2 border-gray-300" />

            <div className="flex flex-col gap-4 mt-4">
              {/* Highlighted Top Breaking News */}
              {breaking.slice(0, 1).map((news) => (
                <Link
                  title={news.title}
                  key={news._id}
                  to={`/news/${news._id}`}
                  className="block w-full bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <img
                    className="w-full h-[160px] object-cover rounded-t-lg"
                    src={news.image}
                    alt={news.title}
                  />
                  <div className="p-3">
                    <h3 className="text-lg font-semibold text-gray-700 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                      {news.description}
                    </p>
                  </div>
                </Link>
              ))}

              {/* Additional Breaking News */}
              <div className="space-y-4">
                {breaking.map((news) => (
                  <Link
                    title={news.title}
                    key={news._id}
                    to={`/news/${news._id}`}
                    className="w-full bg-white rounded-lg shadow hover:shadow-md transition-all duration-300 flex gap-3 p-2"
                  >
                    <img
                      className="w-20 h-20 object-cover rounded-md"
                      src={news.image}
                      alt={news.title}
                    />
                    <div className="flex flex-col justify-between">
                      <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                        {news.title}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-3">
                        {news.description}
                      </p>
                    </div>
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

import { useContext } from "react";
import { AuthContext } from "../../../contextAPI/AuthProvider";
import { Link } from "react-router-dom";

const AllNewses = () => {
  const { newses } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 md:px-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700 underline">
        All News Articles
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newses
          .slice()
          .reverse()
          .map((news) => (
            <Link to={`/news/${news._id}`} key={news._id}>
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group h-full">
                <img
                  className=" w-full md:h-[250px] object-cover group-hover:scale-105 transition-transform duration-300"
                  src={news.image}
                  alt={news.title}
                />
                <div className="p-4 flex flex-col justify-between h-[200px]">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                    {news.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                    {news.description}
                  </p>
                  <span className="mt-auto text-indigo-600 font-medium hover:underline">
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default AllNewses;

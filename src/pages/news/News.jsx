import { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../contextAPI/AuthProvider";

const News = () => {
  const news = useLoaderData();
  const { id } = useParams();
  const newses = useContext(AuthContext);
  const allNewses = newses.newses.filter((news) => news._id !== id);

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      {/* Main News Content */}
      <div className="mb-10 bg-white rounded-xl shadow-md p-4 md:p-6 max-w-4xl mx-auto">
        <img
          className="w-full rounded-md object-cover max-h-[400px]"
          src={news?.data?.image}
          alt="Main News"
        />
        <h2 className="text-3xl font-bold mt-4 text-gray-800">
          {news?.data?.title}
        </h2>
        <p className="mt-3 text-gray-700 leading-relaxed text-justify">
          {news?.data?.description}
        </p>
      </div>

      {/* Related News Section */}
      <h1 className="text-3xl font-bold text-center text-indigo-600 underline mb-6">
        Related News
      </h1>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {allNewses.map((news) => (
          <div
            key={news._id}
            className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 group"
          >
            <img
              className="w-full object-cover rounded-md mb-4 group-hover:scale-105 transition-transform duration-300"
              src={news.image}
              alt={news.title}
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {news.title}
            </h2>
            <p className="text-gray-600 mb-3">
              {news.description.slice(0, 120) + "...."}
            </p>
            <Link
              to={`/news/${news._id}`}
              className="inline-block text-indigo-600 font-semibold hover:underline transition"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;

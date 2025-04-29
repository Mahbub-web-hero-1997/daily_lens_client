import { useContext } from "react";
import { AuthContext } from "../../contextAPI/AuthProvider";
import { Link } from "react-router-dom";

const Breaking = () => {
  const newses = useContext(AuthContext);
  const breaking = newses.newses.filter(
    (news) => news.category === "Breaking-News"
  );

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 md:px-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 underline ">
        Breaking News
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {breaking.map(({ title, description, image, _id }) => (
          <div
            key={_id}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >
            <img
              src={image}
              alt={title}
              className="w-full md:h-[250px] object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="p-4 flex flex-col justify-between h-[200px]">
              <h2 className="text-lg font-semibold text-gray-700 mb-2 line-clamp-2">
                {title}
              </h2>
              <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                {description}
              </p>
              <Link
                to={`/news/${_id}`}
                className="text-blue-600 font-medium hover:underline transition-colors duration-200"
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breaking;

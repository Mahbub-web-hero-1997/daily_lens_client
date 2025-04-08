import { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../contextAPI/AuthProvider";

const News = () => {
  const news = useLoaderData();
  const { id } = useParams();
  const newses = useContext(AuthContext);
  const allNewses = newses.newses.filter((news) => news._id !== id);
  console.log(newses.newses.news);

  return (
    <>
      <div className="p-4 ">
        <div className="mb-8 ">
          <img
            className="w-full md:w-1/2 mx-auto rounded-sm"
            src={news?.data?.image}
          />
          <h2 className="text-xl font-semibold my-2">{news?.data?.title}</h2>
          <p className="text-justify leading-6">{news?.data?.description}</p>
        </div>
        <h1 className="text-3xl font-semibold text-center underline mb-3">
          Related News
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {allNewses.map((news) => (
            <div
              key={news._id}
              className="hover:scale-101 transition-all p-3 mt-4 shadow-sm border-l-[1px] border-b-[1px] border-gray-300"
            >
              <img
                className="w-full md:h-[250px] mx-auto rounded-sm"
                src={news.image}
              />
              <h2 className="text-xl font-semibold my-2">{news.title}</h2>
              <p className="text-justify leading-6">
                {news.description.slice(0, 120) + "...."}
              </p>
              <Link to={`/news/${news._id}`} className="font-semibold">
                Read-more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;

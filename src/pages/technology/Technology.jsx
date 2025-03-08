import { useContext } from "react";
import { AuthContext } from "../../contextAPI/AuthProvider";
import { Link } from "react-router-dom";
const Technology = () => {
  const { newses } = useContext(AuthContext);
  const technology = newses?.filter((news) => news.category === "Technology");
  console.log(technology);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
      {technology
        .slice()
        .reverse()
        .map((news) => {
          const { title, description, image, _id } = news;
          return (
            <div className="hover:scale-101 transition-all" key={_id}>
              <img
                className="w-full mx-auto rounded-sm"
                src={image}
                alt={title}
              />
              <h2 className="text-xl font-semibold my-2">{title}</h2>
              <p className="text-justify leading-6">
                {description.slice(0, 120) + "...."}
              </p>
              <Link to={`/news/${_id}`} className="font-semibold">
                Read-more
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Technology;

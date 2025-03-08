import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contextAPI/AuthProvider";

const International = () => {
  const { newses } = useContext(AuthContext);

  const internationals = newses?.filter(
    (news) => news.category === "World-News"
  );
  // console.log(internationals);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
      {internationals
        .slice()
        .reverse()
        .map((international) => {
          const { title, description, image, _id } = international;
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

export default International;

import React, { useContext } from "react";
import { AuthContext } from "../../../contextAPI/AuthProvider";
import { Link } from "react-router-dom";

const AllNewses = () => {
  const newses = useContext(AuthContext);
  const allNewses = newses?.newses;
  //   console.log(allNewses);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {allNewses.map((news) => (
        <div key={news._id}>
          {" "}
          <div key={news._id} className="hover:scale-101 transition-all p-1">
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
        </div>
      ))}
    </div>
  );
};

export default AllNewses;

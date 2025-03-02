import { Link } from "react-router-dom";

const Breaking = ({ breaking }) => {
  const { title, description, image, _id } = breaking;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
      <div className="hover:scale-101 transition-all">
        <img className="w-full mx-auto rounded-sm" src={image} alt={title} />
        <h2 className="text-xl font-semibold my-2">{title}</h2>
        <p className="text-justify leading-6">
          {description.slice(0, 120) + "...."}
        </p>
        <Link to={`/breaking/${_id}`} className="font-semibold">
          Read-more
        </Link>
      </div>
    </div>
  );
};

export default Breaking;

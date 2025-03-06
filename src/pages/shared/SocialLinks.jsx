import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import {
  FaSquareXTwitter,
  FaSquareYoutube,
  FaSquareInstagram,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
const SocialLinks = () => {
  return (
    <div>
      <h1 className="text-xl text-center font-semibold mb-">
        Social Media Links
      </h1>
      <hr className="w-full md:w-1/2 mx-auto mt-2 mb-6 border-gray-400" />
      <div className="flex justify-center items-center gap-4">
        <Link to="#">
          <FaFacebookSquare className="text-4xl text-gray-800 active:scale-95" />
        </Link>
        <Link to="#">
          <FaSquareXTwitter className="text-4xl text-gray-800 active:scale-95" />
        </Link>
        <Link to="#">
          <FaSquareYoutube className="text-4xl text-gray-800 active:scale-95" />
        </Link>
        <Link to="#">
          <FaLinkedin className="text-4xl text-gray-800 active:scale-95" />
        </Link>
        <Link to="#">
          <FaSquareInstagram className="text-4xl text-gray-800 active:scale-95" />
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;

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
      <h1 className="text-xl text-center font-semibold mb-3 text-gray-800">
        Social Media Links
      </h1>
      <hr className="w-full md:w-1/2 mx-auto mb-6 border-gray-400" />

      <div className="flex justify-center items-center gap-5">
        <Link to="#" title="Facebook">
          <FaFacebookSquare className="text-4xl text-gray-600 hover:text-blue-600 hover:scale-110 transition duration-300 cursor-pointer" />
        </Link>
        <Link to="#" title="Twitter">
          <FaSquareXTwitter className="text-4xl text-gray-600 hover:text-black hover:scale-110 transition duration-300 cursor-pointer" />
        </Link>
        <Link to="#" title="YouTube">
          <FaSquareYoutube className="text-4xl text-gray-600 hover:text-red-600 hover:scale-110 transition duration-300 cursor-pointer" />
        </Link>
        <Link to="#" title="LinkedIn">
          <FaLinkedin className="text-4xl text-gray-600 hover:text-blue-700 hover:scale-110 transition duration-300 cursor-pointer" />
        </Link>
        <Link to="#" title="Instagram">
          <FaSquareInstagram className="text-4xl text-gray-600 hover:text-pink-500 hover:scale-110 transition duration-300 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;

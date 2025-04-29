import { useContext } from "react";
import { AuthContext } from "../../contextAPI/AuthProvider";
import { FaEdit } from "react-icons/fa";
import GetAllNews from "./getAllNews";
import { Link } from "react-router-dom";

const AdminHome = () => {
  const { currentUser } = useContext(AuthContext);
  const { profilePicture, fullName, email } = currentUser || {};
  return (
    <div className="min-h-screen flex flex-col justify-left">
      <div className="bg-white rounded-2xl md:p-8 w-full h-screen">
        <div className="relative w-32 h-32 mx-auto">
          <img
            src={profilePicture}
            alt="Profile"
            className="w-full h-full rounded-full object-cover shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:scale-105"
          />

          <div className="absolute top-1 right-1 p-2 bg-gray-800 text-white rounded-full cursor-pointer hover:bg-gray-600 transition-all">
            <Link to="/dashboard/updateProfile" title="Edit Profile">
              <FaEdit size={18} />
            </Link>
          </div>
        </div>

        <div className="relative mt-4 md:mt-6 flex justify-center items-center">
          <h2 className="text-3xl font-bold text-gray-800">
            {fullName || "User Name"}
          </h2>
          <Link to="/dashboard/updateProfile" title="Edit Profile">
            <FaEdit
              size={18}
              className="ml-2 text-gray-600 cursor-pointer hover:text-gray-800 transition"
              title="Edit Name"
            />
          </Link>
        </div>

        <div className="relative mt-2 flex justify-center items-center">
          <p className="text-gray-500">{email || "user@example.com"}</p>
          <Link to="/dashboard/updateProfile" title="Edit Profile">
            <FaEdit
              size={18}
              className="ml-2 text-gray-600 cursor-pointer hover:text-gray-800 transition"
              title="Edit Name"
            />
          </Link>
        </div>

        <hr className="my-6 border-gray-300" />

        <div className="text-center">
          <GetAllNews />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;

import { useContext } from "react";
import { AuthContext } from "../../contextAPI/AuthProvider";
import { FaEdit } from "react-icons/fa";
import GetAllNews from "./getAllNews";
import { Link } from "react-router-dom";

const AdminHome = () => {
  const { currentUser, isAdmin } = useContext(AuthContext);
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
        {isAdmin ? (
          <div className="text-center">
            <GetAllNews />
          </div>
        ) : (
          <div className="flex items-center justify-center px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 animate-bounce">
                Coming Soon!
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto">
                The{" "}
                <span className="font-semibold text-blue-600">
                  User Profile
                </span>{" "}
                section is under construction. We&apos;re working hard to bring
                you this feature soon!
              </p>
              <div className="mt-6">
                <span className="inline-block px-4 py-2 bg-yellow-300 text-yellow-900 rounded-full font-medium shadow-sm animate-pulse">
                  Stay tuned...
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminHome;

import { useContext } from "react";
import { AuthContext } from "../../contextAPI/AuthProvider";
import { FaEdit } from "react-icons/fa"; // Import edit icon from react-icons

const User = () => {
  const { currentUser } = useContext(AuthContext);
  const { profilePicture, fullName, email } = currentUser || {};

  return (
    <div className="min-h-screen flex flex-col justify-left">
      <div className="bg-white rounded-2xl p-8 w-full h-screen">
        {/* Profile Image with Edit Icon */}
        <div className="relative w-32 h-32 mx-auto">
          <img
            src={profilePicture}
            alt="Profile"
            className="w-full h-full rounded-full object-cover shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:scale-105"
          />
          {/* Edit Icon (Top-Right) */}
          <div className="absolute top-1 right-1 p-2 bg-gray-800 text-white rounded-full cursor-pointer hover:bg-gray-600 transition-all">
            <FaEdit size={18} />
          </div>
        </div>

        {/* User Name with Edit Icon */}
        <div className="relative mt-6 flex justify-center items-center">
          <h2 className="text-3xl font-bold text-gray-800">
            {fullName || "User Name"}
          </h2>
          <FaEdit
            size={18}
            className="ml-2 text-gray-600 cursor-pointer hover:text-gray-800 transition"
            title="Edit Name"
          />
        </div>

        {/* Email with Edit Icon */}
        <div className="relative mt-2 flex justify-center items-center">
          <p className="text-gray-500">{email || "user@example.com"}</p>
          <FaEdit
            size={16}
            className="ml-2 text-gray-500 cursor-pointer hover:text-gray-700 transition"
            title="Edit Email"
          />
        </div>

        <hr className="my-6 border-gray-300" />

        {/* Dashboard Info */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">
            Welcome to your Dashboard
          </h3>
          <p className="text-gray-600">
            Manage your profile, settings, and more from here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;

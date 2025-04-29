import { useContext } from "react";
import { AuthContext } from "../../contextAPI/AuthProvider";
import { FaEdit } from "react-icons/fa"; // Import edit icon from react-icons

const User = () => {
  const { currentUser } = useContext(AuthContext);
  const { profilePicture, fullName, email } = currentUser || {};

  return (
    <div className="min-h-screen flex flex-col justify-left">
      <div className="bg-white rounded-2xl p-8 w-full h-screen ">
        {/* Profile Image with Edit Icon */}
        <div className="flex justify-center ">
          <img
            src={profilePicture}
            alt="Profile"
            className="w-32 h-32 relative rounded-full object-cover shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:scale-105"
          />
          {/* Edit Icon */}
          <div className="absolute bottom-0 right-0 mb-2 mr-2 p-2 bg-gray-800 text-white rounded-full cursor-pointer hover:bg-gray-600 transition-all">
            <FaEdit size={20} />
          </div>
        </div>

        {/* User Info */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mt-6">
          {fullName || "User Name"}
        </h2>
        <p className="text-center text-gray-500 mb-6">
          {email || "user@example.com"}
        </p>

        <hr className="my-4 border-gray-300" />

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

import { useContext } from "react";
import { AuthContext } from "../../contextAPI/AuthProvider";

const User = () => {
  const { currentUser } = useContext(AuthContext);
  const { profilePicture, fullName, email } = currentUser || {};

  return (
    <div className="4">
      <div className="mt-10 bg-white rounded-2xl shadow-2xl p-8 w-full">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:scale-105"
          />
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

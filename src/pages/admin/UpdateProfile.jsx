import React from "react";

const UpdateProfile = () => {
  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-gradient-to-br from-purple-100 to-blue-100 px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 animate-bounce">
          Coming Soon!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto">
          The{" "}
          <span className="font-semibold text-blue-600">Update Profile</span>{" "}
          section is under construction. We&appos;re working hard to bring you
          this feature soon!
        </p>
        <div className="mt-6">
          <span className="inline-block px-4 py-2 bg-yellow-300 text-yellow-900 rounded-full font-medium shadow-sm animate-pulse">
            Stay tuned...
          </span>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

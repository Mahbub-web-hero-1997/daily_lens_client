import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginInfo = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      gender: e.target.gender.value,
      profilePicture: e.target.profilePicture.files[0],
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
    };
    console.log({ profilePicture: e.target.profilePicture.files[0] });
    // Call the login API here with loginInfo
    axios
      .post(
        "https://daily-lens-server.vercel.app/api/v1user/register",
        loginInfo
      )
      .then((res) => {
        navigate("/login");
        console.log(res.data);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex items-center gap-4">
            <label className="font-medium text-gray-600">Gender:</label>
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" value="male" required />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" value="female" required />
              Female
            </label>
          </div>

          <label className="block w-full">
            <span className="block mb-1 text-gray-700 font-medium">
              Profile Picture
            </span>
            <input
              type="file"
              name="profilePicture"
              accept="image/*"
              className="block w-full text-sm text-gray-700
      file:mr-4 file:py-2 file:px-4
      file:rounded-lg file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-600 file:text-white
      hover:file:bg-blue-700
      transition-all duration-300"
            />
          </label>

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center text-gray-500">
          Have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

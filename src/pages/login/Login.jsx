import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contextAPI/AuthProvider";
import { useContext } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { setCurrentUser, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginInfo = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    // Call the login API here with loginInfo
    axios
      .post(
        "https://daily-lens-server.vercel.app/api/v1/user/login",
        loginInfo,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setCurrentUser(res.data?.data?.user);
        // console.log(res.data.data.user);
        navigate("/dashboard");
        console.log(res.data.message);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-500">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

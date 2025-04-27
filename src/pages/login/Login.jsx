import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contextAPI/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import { FaHome } from "react-icons/fa";

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
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${res.data.message}`,
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/", { replace: true });
      });
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <FaHome
            className="text-3xl text-blue-600 cursor-pointer"
            onClick={() => navigate("/")}
          />
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
              className="my-6 w-full text-xl py-3 uppercase cursor-pointer bg-gray-800 bg-gray-700 text-white p-2 rounded-md active:scale-[0.9] transition-transform duration-150 ease-out"
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
    </>
  );
};

export default Login;

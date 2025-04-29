import { useContext, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { AuthContext } from "../../contextAPI/AuthProvider";
import UseAxiosPublic from "../../customHook/UseAxios";
import Swal from "sweetalert2";

const Dashboard = () => {
  const axiosPublic = UseAxiosPublic();
  const [isShow, setIsShow] = useState(false);
  const { setCurrentUser, loading, isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    axiosPublic
      .post("/user/logout")
      .then((res) => {
        navigate("/", { replace: true });
        setTimeout(() => setCurrentUser(null), 1000);
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((err) => console.error(err.message));
  };

  const toggleSidebar = () => {
    setIsShow((prev) => !prev);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-100 to-blue-300">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gradient-to-br from-blue-100 to-gray-200 relative">
      {/* Sidebar toggle button for mobile */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-full shadow-md hover:scale-105 transition-transform"
      >
        {isShow ? (
          <MdCancel className="text-2xl text-gray-700" />
        ) : (
          <FaBars className="text-xl text-gray-700" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-screen bg-gradient-to-br from-gray-800 to-gray-700 text-white w-[70%] md:w-[20%] px-6 pt-8 pb-4 z-40 shadow-lg transform transition-transform duration-300 ${
          isShow ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="text-center text-2xl font-bold mb-6 tracking-wider text-white">
          <Link to="/">THE DAILY LENS</Link>
        </div>
        <hr className="border-gray-500 mb-6" />

        <ul className="space-y-4">
          {isAdmin ? (
            <>
              <NavLink
                end
                className={({ isActive }) =>
                  isActive
                    ? "block font-semibold text-blue-400 border-b-2 border-blue-400 pb-1 transition"
                    : "block hover:text-blue-300 transition"
                }
                to="/dashboard"
              >
                Admin Home
              </NavLink>

              <NavItem to="/dashboard/create-news" label="Create News" />
            </>
          ) : (
            <>
              <NavItem to="/dashboard/user" label="Profile" />
              <NavItem to="#" label="Update Profile" />
            </>
          )}
          <li>
            <button
              onClick={handleLogOut}
              className="w-full text-left font-semibold hover:text-red-400 transition duration-300"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-8 bg-white rounded-tl-3xl shadow-inner ">
        <Outlet />
      </div>
    </div>
  );
};

const NavItem = ({ to, label }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "block font-semibold text-blue-400 border-b-2 border-blue-400 pb-1 transition"
          : "block hover:text-blue-300 transition"
      }
    >
      {label}
    </NavLink>
  </li>
);

export default Dashboard;

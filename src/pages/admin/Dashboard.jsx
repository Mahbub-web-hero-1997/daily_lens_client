import { useContext, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { AuthContext } from "../../contextAPI/AuthProvider";
import UseAxiosPublic from "../../customHook/UseAxios";
import Swal from "sweetalert2";

const Dashboard = () => {
  const axiosPublic = UseAxiosPublic();
  const [isShow, setIsShow] = useState(true);
  const { setCurrentUser, loading, isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-2 border-dashed rounded-full animate-spin border-blue-500"></div>
      </div>
    );
  }
  const handleLogOut = () => {
    axiosPublic
      .post("/user/logout")
      .then((res) => {
        navigate("/", { replace: true });
        if (res.data) {
          setTimeout(() => {
            setCurrentUser(null);
          }, 1000);
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${res.data.message}`,
            showConfirmButton: false,
            timer: 2000,
          });
          console.log(res.data);
        }
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSidebar = () => {
    if (isShow) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
    console.log(isShow);
  };
  return (
    <>
      <div className="flex w-full p-1 h-screen">
        {isShow ? (
          <button
            onClick={handleSidebar}
            className="z-50 fixed top-2 left-2 bg-white p-2 rounded-full shadow-md hover:scale-110 transition duration-300"
          >
            <FaBars className="text-xl text-gray-700 cursor-pointer" />
          </button>
        ) : null}

        <div
          className={`fixed top-0 left-0 h-screen bg-gray-700 px-4 w-[70%] md:w-[20%] z-20 transition-transform duration-300 ${
            isShow ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <button
            onClick={handleSidebar}
            className="absolute top-0 right-0 bg-white text-gray-800 p-1 rounded-full shadow-md hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out"
          >
            <MdCancel className="text-2xl" />
          </button>
          {isAdmin ? (
            <ul className="mt-3 text-white uppercase">
              <li className="text-center text-md md:text-xl font-semibold ">
                <Link to="/">THE-DAILY-LENS</Link>
              </li>
              <hr className="w-full md:w-3/4 mx-auto my-3" />
              <li className="text-center text-md font-semibold flex items-center gap-2 ">
                <NavLink
                  className={({ isActive }) => (isActive ? " " : "text-white")}
                  to="/dashboard"
                >
                  Admin Home
                </NavLink>
              </li>
              <li className="text-center text-md font-semibold flex items-center gap-2 mt-2 ">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-b pb-[1px] translate-x-[1px] transition-all "
                      : "text-white"
                  }
                  to="/dashboard/create-news"
                >
                  Create-News
                </NavLink>
              </li>
              {/* <li className="text-center text-md font-semibold flex items-center gap-2 mt-2 ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b pb-[1px] translate-x-[1px] transition-all "
                    : "text-white"
                }
                to="/dashboard/All-Newses"
              >
                All-Newses
              </NavLink>
            </li> */}
              <li className="text-center text-md font-semibold flex items-center gap-2 mt-2 ">
                <button
                  onClick={handleLogOut}
                  className="text-white font-semibold flex items-center gap-2 cursor-pointer"
                >
                  LogOut
                </button>
              </li>
            </ul>
          ) : (
            <ul className="mt-3 text-white uppercase">
              <li className="text-center text-md md:text-xl font-semibold ">
                <Link to="/">THE-DAILY-LENS</Link>
              </li>
              <hr className="w-full md:w-3/4 mx-auto my-3" />
              <li className="text-center text-md font-semibold flex items-center gap-2 ">
                <NavLink
                  className={({ isActive }) => (isActive ? " " : "text-white")}
                  to="/dashboard/user"
                >
                  User Home
                </NavLink>
              </li>
              <li className="text-center text-md font-semibold flex items-center gap-2 mt-2 ">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-b pb-[1px] translate-x-[1px] transition-all "
                      : "text-white"
                  }
                  to="#"
                >
                  Update Profile
                </NavLink>
              </li>
              {/* <li className="text-center text-md font-semibold flex items-center gap-2 mt-2 ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b pb-[1px] translate-x-[1px] transition-all "
                    : "text-white"
                }
                to="/dashboard/All-Newses"
              >
                All-Newses
              </NavLink>
            </li> */}
              <li className="text-center text-md font-semibold flex items-center gap-2 mt-2 ">
                <button
                  onClick={handleLogOut}
                  className="text-white font-semibold flex items-center gap-2 cursor-pointer"
                >
                  LogOut
                </button>
              </li>
            </ul>
          )}
        </div>
        <div className=" w-full md:w-3/4 h-screen md:ml-[20%] ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

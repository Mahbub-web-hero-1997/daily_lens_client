import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import UseAxiosPrivate from "../../customHook/UseAxiosSecure";

const Dashboard = () => {
  const axiosPrivate = UseAxiosPrivate();
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();
  const handleLogOut = () => {
    axiosPrivate
      .post("http://localhost:3000/api/v1/user/logout")
      .then((res) => {
        if (res.data) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
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
        <button onClick={handleSidebar} className="z-50 fixed top-2 left-2">
          {isShow ? (
            <FaBars className="text-xl text-gray-700  cursor-pointer " />
          ) : (
            <MdCancel className="text-2xl text-white fixed  z-50 cursor-pointer" />
          )}
        </button>
        <div
          className={`fixed top-0 left-0 h-screen bg-gray-700 px-4 w-[70%] md:w-[15%] z-20 transition-transform duration-300 ${
            isShow ? "-translate-x-full" : ""
          }`}
        >
          <ul className="mt-3 text-white uppercase">
            <li className="text-center text-md md:text-xl font-semibold ">
              <NavLink to="/">THE-DAILY-LENS</NavLink>
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
            <li className="text-center text-md font-semibold flex items-center gap-2 mt-2 ">
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
            </li>
            <li className="text-center text-md font-semibold flex items-center gap-2 mt-2 ">
              <NavLink
                onClick={handleLogOut}
                className={({ isActive }) =>
                  isActive
                    ? "border-b pb-[1px] translate-x-[1px] transition-all "
                    : "text-white"
                }
                to="/dashboard/All-Newses"
              >
                LogOut
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="w-full h-screen ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

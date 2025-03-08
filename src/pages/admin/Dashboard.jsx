import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import { MdCancel } from "react-icons/md";
import AdminHome from "./AdminHome";
import CreateNews from "./CreateNews";
const Dashboard = () => {
  const [isShow, setIsShow] = useState(false);
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
      <div className="flex w-full relative">
        <button onClick={handleSidebar}>
          {isShow ? (
            <FaBars className="text-xl text-gray-700 fixed top-2 left-2 cursor-pointer " />
          ) : (
            <MdCancel className="text-2xl text-white fixed top-2 left-2 z-50 cursor-pointer" />
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
          </ul>
        </div>
        <div className="w-full h-screen mx-auto md:ml-60 md:pt-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

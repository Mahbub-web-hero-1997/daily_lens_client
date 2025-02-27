import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navItem = (
    <>
      <li className="text-md ">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "bg-gray-200 font-bold" : "font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-md ">
        <NavLink
          to="/breaking"
          className={({ isActive }) =>
            isActive ? "bg-gray-200 font-bold" : "font-semibold"
          }
        >
          Breaking News
        </NavLink>
      </li>
      <li className="text-md ">
        <NavLink
          to="/politics"
          className={({ isActive }) =>
            isActive ? "bg-gray-200 font-bold" : "font-semibold"
          }
        >
          Politics
        </NavLink>
      </li>
      <li className="text-md ">
        <NavLink
          to="/national"
          className={({ isActive }) =>
            isActive ? "bg-gray-200 font-bold" : "font-semibold"
          }
        >
          National News
        </NavLink>
      </li>
      <li className="text-md ">
        <NavLink
          to="/international"
          className={({ isActive }) =>
            isActive ? "bg-gray-200 font-bold" : "font-semibold"
          }
        >
          International
        </NavLink>
      </li>
      <li className="text-md ">
        <NavLink
          to="/business"
          className={({ isActive }) =>
            isActive ? "bg-gray-200 font-bold" : "font-semibold"
          }
        >
          Business & Economy
        </NavLink>
      </li>
      <li className="text-md ">
        <NavLink
          to="/technology"
          className={({ isActive }) =>
            isActive ? "bg-gray-200 font-bold" : "font-semibold"
          }
        >
          Technology
        </NavLink>
      </li>
      <li className="text-md ">
        <NavLink
          to="/sports"
          className={({ isActive }) =>
            isActive ? "bg-gray-200 font-bold" : "font-semibold"
          }
        >
          Sports
        </NavLink>
      </li>

      <li className="text-md ">
        <NavLink
          to="/entertainment"
          className={({ isActive }) =>
            isActive ? "bg-gray-200 font-bold" : "font-semibold"
          }
        >
          Entertainment
        </NavLink>
      </li>
      <li className="text-md ">
        <NavLink
          to="/career"
          className={({ isActive }) =>
            isActive ? "bg-gray-200 font-bold" : "font-semibold"
          }
        >
          Jobs & Careers
        </NavLink>
      </li>

      <li className="text-md ">
        <NavLink
          to="/health"
          className={({ isActive }) =>
            isActive ? "bg-gray-200 font-bold" : "font-semibold"
          }
        >
          Health & Wellness
        </NavLink>
      </li>
      <li className="text-md ">
        <NavLink
          to="/education"
          className={({ isActive }) =>
            isActive ? "bg-gray-200 font-bold" : "font-semibold"
          }
        >
          Education
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="w-full text-center my-4 hidden md:block md:z-50">
        <h1 className=" text-6xl font-semibold">DAILY-LENS</h1>
      </div>
      <div className="navbar bg-base-100 shadow-sm sticky top-0 md:z-50">
        <div className="md:navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItem}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end md:hidden">
          <Link to="#" className=" btn btn-ghost text-2xl">
            DAILY-LENS
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

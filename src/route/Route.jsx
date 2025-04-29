import { createBrowserRouter } from "react-router-dom";

import Root from "../pages/Root";
import CreateNews from "../pages/admin/CreateNews";
import Politics from "../pages/politics/Politics";
import International from "../pages/international/International";
import Technology from "../pages/technology/Technology";
import Sports from "../pages/sports/Sports";
import Entertainment from "../pages/entertainment/Entertainment";
import JobsAndCareer from "../pages/jobsAndCareer/JobsAndCareer";
import NationalNews from "../pages/NationalNews.jsx/NationalNews";
import HealthAndWellness from "../pages/healthAndWellness/HealthAndWellness";
import Education from "../pages/education/Education";
import BusinessAndEconomy from "../pages/businessAndEconomy/BusinessAndeconomy";

import News from "../pages/news/News";
import Home from "../pages/home/Home";
import Breaking from "../pages/breakingNews/Breaking";
import Dashboard from "../pages/admin/Dashboard";
import AdminHome from "../pages/admin/AdminHome";
import GetAllNews from "../pages/admin/getAllNews";
import UpdateNews from "../pages/admin/UpdateNews";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "../pages/PrivateRoute";
import User from "../pages/admin/User";

// import News from "../pages/home/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/breaking", element: <Breaking /> },
      { path: "/politics", element: <Politics /> },
      { path: "/international", element: <International /> },
      { path: "/technology", element: <Technology /> },
      { path: "/sports", element: <Sports /> },
      { path: "/entertainment", element: <Entertainment /> },
      { path: "/career", element: <JobsAndCareer /> },
      { path: "/national", element: <NationalNews /> },
      { path: "/health", element: <HealthAndWellness /> },
      { path: "/education", element: <Education /> },
      { path: "/business", element: <BusinessAndEconomy /> },
      {
        path: "/news/:id",
        element: <News />,
        loader: ({ params }) =>
          fetch(
            `https://daily-lens-server.vercel.app/api/v1/news/single-news/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <AdminHome />,
      },
      {
        path: "/dashboard/create-news",
        element: <CreateNews />,
      },
      {
        path: "/dashboard/All-Newses",
        element: <GetAllNews />,
      },
      {
        path: "/dashboard/update/:id",
        element: <UpdateNews />,
        loader: ({ params }) =>
          fetch(
            `https://daily-lens-server.vercel.app/api/v1/news/single-news/${params.id}`
          ),
      },
      {
        path: "/dashboard/user",
        element: <User />,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";

import Root from "../pages/Root";
import CreateNews from "../pages/admin/CreateNews";
import Breaking from "../pages/breakingNews/Breaking";
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

// import News from "../pages/home/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
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
    ],
  },
  {
    path: "/create",
    element: <CreateNews />,
  },
]);

export default router;

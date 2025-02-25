import { createBrowserRouter } from "react-router-dom";

import Root from "../pages/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/breaking", element: <h1>Breaking News</h1> },
      { path: "/politics", element: <h1>Politics</h1> },
      { path: "/international", element: <h1>International</h1> },
      { path: "/technology", element: <h1>technology</h1> },
      { path: "/sports", element: <h1>sports</h1> },
      { path: "/entertainment", element: <h1>entertainment</h1> },
      { path: "/world", element: <h1>world</h1> },
      { path: "/national", element: <h1>national</h1> },
      { path: "/health", element: <h1>health</h1> },
      { path: "/education", element: <h1>education</h1> },
      { path: "/business", element: <h1>Business & Economy</h1> },
    ],
  },
]);

export default router;

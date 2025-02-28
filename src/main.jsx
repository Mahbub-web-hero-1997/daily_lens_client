import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./route/Route";
import AuthProvider from "./contextAPI/AuthProvider";

createRoot(document.getElementById("root")).render(
  <div className="w-full bg-[rgb(237,239,242)] mx-auto">
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </StrictMode>
  </div>
);

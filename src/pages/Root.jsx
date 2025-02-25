import { Outlet } from "react-router-dom";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

const Root = () => {
  return (
    <>
      <div className="">
        <Header />
        <div className="h-screen">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Root;

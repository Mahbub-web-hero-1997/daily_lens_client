import { Outlet } from "react-router-dom";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

const Root = () => {
  return (
    <>
      <div className="w-full bg-[#E4E3DB] h-auto">
        <Header />
        <div className="">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Root;

import { Outlet } from "react-router-dom";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;

import { Outlet } from "react-router-dom";
import Header from "./shared/Header";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;

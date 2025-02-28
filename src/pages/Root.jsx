import { Outlet } from "react-router-dom";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

const Root = () => {
  return (
    <>
      <div className="w-full ">
        <Header />
        <div className="w-full md:w-[98%] mx-auto flex flex-col md:flex-row sticky top-0 ">
          <div className="w-full md:w-[20%] h-screen p-2 order-2 md:order-1 ">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              magni vitae suscipit neque totam, quisquam voluptas nisi dolorem
              culpa facilis. Eaque nobis et, veritatis dicta dignissimos
              expedita accusamus sunt asperiores.
            </h1>
          </div>
          <div className="w-full md:w-[60%] bg-white overflow-scroll scrollbar-hidden p-2 order-1 md:order-2">
            <Outlet />
          </div>
          <div className="w-full md:w-[20%] h-screen sticky top-0 p-2 order-2 md:order-3">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              magni vitae suscipit neque totam, quisquam voluptas nisi dolorem
              culpa facilis. Eaque nobis et, veritatis dicta dignissimos
              expedita accusamus sunt asperiores.
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Root;

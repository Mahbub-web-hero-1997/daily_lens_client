import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../customHook/UseAxios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseCloudinary from "../../customHook/UseCloudinary";
import { FaHome } from "react-icons/fa";

const Register = () => {
  const { uploadImage, err } = UseCloudinary();
  const navigate = useNavigate();
  const axiosPublic = UseAxiosPublic();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const file = data.profilePicture[0];
      const imageUrl = await uploadImage(file);
      if (!imageUrl) {
        Swal.fire({
          icon: "error",
          title: "Profile Picture Upload Error",
          text: err,
        });
        return;
      }
      if (data.password !== data.confirmPassword) {
        Swal.fire({
          icon: "error",
          title: "Password Mismatch",
          text: "Please make sure your passwords match.",
        });
        return;
      }
      const formData = new FormData();
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("gender", data.gender);
      formData.append("password", data.password);
      formData.append("confirmPassword", data.confirmPassword);
      formData.append("profilePicture", imageUrl);
      await axiosPublic.post("/user/register", formData).then((res) => {
        console.log(res.data);
        if (res.status === 201) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${res.data.message}`,
            showConfirmButton: false,
            timer: 2000,
          });
          reset();
          navigate("/login");
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: res.data.message,
          });
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-[96%] md:w-3/7 mx-auto  flex flex-col items-center shadow-xl bg-white rounded-2xl">
          <div className="w-full flex justify-between items-center px-6 mt-4">
            <FaHome
              className="text-3xl text-blue-600 cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>
          <form
            // className="w-full md:w-3/5 h-auto mx-auto flex flex-col p-2"
            className="w-full h-auto mx-auto flex flex-col px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 rounded-md border-0 border-b-1 border-b-gray-400 outline-0 mb-3 py-5 text-gray-700"
              {...register("fullName", { required: true })}
            />

            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-md border-0 border-b-1 border-b-gray-400 outline-0 mb-3 py-5 text-gray-700"
              {...register("email", { required: true })}
            />

            <div className="flex gap-4 mb-4 border-0 border-b-1 border-b-gray-400 rounded-md p-4">
              <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center">
                <label className="text-gray-700 font-medium">Gender:</label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors">
                    <input
                      type="radio"
                      value="Male"
                      {...register("gender", { required: true })}
                      className="accent-blue-600"
                    />
                    <span className="text-gray-700">Male</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-pink-500 transition-colors">
                    <input
                      type="radio"
                      value="Female"
                      {...register("gender", { required: true })}
                      className="accent-pink-500"
                    />
                    <span className="text-gray-700">Female</span>
                  </label>
                </div>
              </div>

              <input
                type="file"
                className="file:mr-4 file:py-2 file:px-4 
             file:rounded-sm file:border-0 
             file:text-sm file:font-semibold 
             file:bg-gray-800 file:text-white 
             hover:file:bg-blue-700            
             text-gray-700 rounded-md 
               cursor-pointer"
                {...register("profilePicture", { required: true })}
              />
            </div>

            <input
              type="password"
              placeholder="Password"
              className="p-2 rounded-md border-0 border-b-1 border-b-gray-400 outline-0 mb-3 py-5 text-gray-700"
              {...register("password", { required: true })}
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="p-2 rounded-md border-0 border-b-1 border-b-gray-400 outline-0 mb-3 py-5 text-gray-700"
              {...register("confirmPassword", { required: true })}
            />

            <input
              className="my-6 text-xl py-3 uppercase cursor-pointer bg-gray-800 bg-gray-700 text-white p-2 rounded-md active:scale-[0.9] transition-transform duration-150 ease-out"
              type="submit"
              value="Register"
            />

            <p className="text-sm text-center text-gray-500 mt-2">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

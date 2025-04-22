import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../customHook/UseAxios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseCloudinary from "../../customHook/UseCloudinary";

const Register = () => {
  const { uploadImage, uploading, err } = UseCloudinary();
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
      <div
        className={`py-6 w-[96%] md:w-2/3 mx-auto h-screen md:h-[calc(100vh-30px)] flex flex-col items-center justify-center`}
      >
        <h2 className="text-2xl text-center font-semibold mb-4 md:mt-20">
          Register Now
        </h2>
        <form
          className="w-full md:w-2/4 h-auto mx-auto flex flex-col p-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 rounded-md border-0 border-b-1 border-b-gray-400 outline-0 mb-3 py-5"
            {...register("fullName", { required: true })}
          />

          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded-md border-0 border-b-1 border-b-gray-400 outline-0 mb-3 py-5"
            {...register("email", { required: true })}
          />

          <div className="flex gap-4 mb-4 items-center">
            <label className="text-gray-700 font-medium">Gender:</label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="Male"
                {...register("gender", { required: true })}
              />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="Female"
                {...register("gender", { required: true })}
              />
              Female
            </label>
          </div>

          <input
            type="file"
            className="file:mr-4 file:py-2 file:px-4 
             file:rounded-sm file:border-0 
             file:text-sm file:font-semibold 
             file:bg-gray-800 file:text-white 
             hover:file:bg-blue-700            
             text-gray-700 rounded-md 
             border-0 border-b-1 border-b-gray-400 rounded-md p-4  cursor-pointer"
            {...register("profilePicture", { required: true })}
          />

          <input
            type="password"
            placeholder="Password"
            className="p-2 rounded-md border-0 border-b-1 border-b-gray-400 outline-0 mb-3 py-5"
            {...register("password", { required: true })}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="p-2 rounded-md border-0 border-b-1 border-b-gray-400 outline-0 mb-3 py-5"
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
    </>
  );
};

export default Register;

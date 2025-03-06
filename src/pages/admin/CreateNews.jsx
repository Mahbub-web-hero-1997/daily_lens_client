import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../customHook/UseAxios";
import styles from "./CreateNews.module.css";

const CreateNews = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = UseAxiosPublic();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("image", data.image[0]);
      formData.append("category", data.category);
      await axiosPublic.post("/news/post", formData);
      alert("News posted successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        className={` py-6 w-[96%] md:w-2/3 mx-auto h-screen md:h-[calc(100vh-30px)] flex flex-col items-center justify-center  `}
      >
        <h2 className="text-2xl text-center font-semibold mb-4 md:mt-20">
          Create a News
        </h2>
        <form
          className={`${styles.form_Styles} w-full md:w-2/4 h-auto mx-auto flex flex-col p-2`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="p-2 rounded-md border-0 border-b-1 border-b-gray-400 outline-0 mb-3 py-5"
            placeholder="News Title"
            {...register("title")}
          />
          <textarea
            className="p-2 rounded-md border-0 border-b-1 border-b-gray-400 outline-0 mb-3 py-5"
            placeholder="News Details"
            {...register("description")}
          />
          <input
            type="file"
            className="p-2 rounded-md border-0 border-b-1 border-b-gray-400 outline-0 mb-3 py-5"
            {...register("image")}
          />
          <select
            className=" border-0 border-b-1 border-b-gray-400 rounded-md p-2 py-5"
            {...register("category")}
          >
            <option value="Breaking-News">Breaking-News</option>
            <option value="Politics">Politics</option>
            <option value="Business & Economy">Business & Economy</option>
            <option value="Technology">Technology</option>
            <option value="Sports">Sports</option>
            <option value="Entertainment">Entertainment</option>
            <option value="World-News">World-News</option>
            <option value="National-News">National-News</option>
            <option value="Health & Wellness">Health & Wellness</option>
            <option value="Education">Education</option>
            <option value="Education">JobsAndCareer</option>
          </select>
          <input
            className="my-6 text-xl py-3 uppercase cursor-pointer bg-gray-800 bg-gray-700 text-white p-2 rounded-md active:scale-[0.9] transition-transform duration-150 ease-out"
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default CreateNews;

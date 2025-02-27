import { useForm } from "react-hook-form";

const CreateNews = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="my-6">
        <h2 className="text-2xl text-center font-semibold mb-4">Post a News</h2>
        <form
          className="w-full md:w-1/3 mx-auto border flex flex-col p-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="p-2 rounded-md border-0 border-b-1 outline-0 mb-3"
            placeholder="News Title"
            {...register("title")}
          />
          <textarea
            className="p-2 rounded-md border-0 border-b-1 outline-0 mb-3"
            placeholder="News Details"
            {...register("description")}
          />
          <input
            type="file"
            className="p-2 rounded-md border-0 border-b-1 outline-0 mb-3"
            {...register("image")}
          />
          <select
            className=" border-0 border-b-1 rounded-md p-2"
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
          </select>
          <input className="my-6 text-xl uppercase" type="submit" />
        </form>
      </div>
    </>
  );
};

export default CreateNews;

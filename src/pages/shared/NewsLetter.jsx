const NewsLetter = () => {
  return (
    <div>
      <div>
        <h1 className="text-xl text-center font-semibold my-6">
          Subscribe to our Newsletter
        </h1>
        <form action="">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-[90%] h-10 px-2 border border-gray-400 rounded-md outline-0"
          />
          <button className="w-full md:w-[90%] h-10 bg-gray-600 text-white rounded-md mt-2 uppercase font-semibold cursor-pointer">
            Subscribe
          </button>
        </form>
        <p className="text-gray-600 text-center mt-2 text-sm text-left">
          We promise not to spam you with unwanted emails.
        </p>
      </div>
      <iframe
        className="w-full md:w-[90%] h-[200px] mx-auto mt-6 rounded-md"
        src="https://www.youtube.com/@JamunaTVbd"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p className="mt-6 text-center text-blue-800 font-semibold">
        Some functionality Coming soon
      </p>
    </div>
  );
};

export default NewsLetter;

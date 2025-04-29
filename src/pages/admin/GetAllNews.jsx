import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contextAPI/AuthProvider";
import { Link } from "react-router-dom";
import UseAxiosPublic from "../../customHook/UseAxios";
import Swal from "sweetalert2";
import { FaEdit, FaTrash } from "react-icons/fa";

const GetAllNews = () => {
  const { newses, loading } = useContext(AuthContext);
  const [categoryNews, setCategoryNews] = useState(newses);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const axiosPublic = UseAxiosPublic();

  useEffect(() => {
    if (selectedCategory === "all") {
      setCategoryNews(newses);
    } else {
      const filteredNews = newses.filter(
        (news) => news.category === selectedCategory
      );
      setCategoryNews(filteredNews);
    }
  }, [selectedCategory, newses]);

  const handleCategoryNews = (event) => {
    setSelectedCategory(event.target.value);
  };

  // New Delete function
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want To Delete It!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Call delete API after user confirmation
          await axiosPublic.delete(`/news/delete/${id}`);

          // Remove deleted news from state
          setCategoryNews((prevNews) =>
            prevNews.filter((news) => news._id !== id)
          );

          // Show success message
          Swal.fire({
            title: "Deleted!",
            text: "The news has been deleted.",
            icon: "success",
            timer: 1500,
          });
        } catch (error) {
          console.error("Error deleting news:", error);
          Swal.fire({
            title: "Error!",
            text: "Failed to delete the news. Please try again.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-2 px-2 md:py-8 md:px-4 rounded-lg">
      {/* Category Filter */}
      <div className="w-full mx-auto bg-white shadow-md rounded-xl p-4 md:p-6 mb-4 md:mb-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            📰 Total News:{" "}
            <span className="text-blue-600">{categoryNews.length}</span>
          </h1>
          <div className="flex items-center gap-3">
            <label className="text-gray-700 font-medium">
              Filter by Category:
            </label>
            <select
              className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700"
              value={selectedCategory}
              onChange={handleCategoryNews}
            >
              <option value="all">All</option>
              <option value="Breaking-News">Breaking-News</option>
              <option value="Politics">Politics</option>
              <option value="National-News">National-News</option>
              <option value="World-News">World-News</option>
              <option value="Business & Economy">Business & Economy</option>
              <option value="Sports">Sports</option>
              <option value="Health & Wellness">Health & Wellness</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Job And Career">Job And Career</option>
              <option value="Education">Education</option>
            </select>
          </div>
        </div>
      </div>

      {/* News Table */}
      <div className="overflow-x-auto w-full mx-auto">
        {loading ? (
          <p className="text-center text-lg font-semibold text-blue-500">
            Loading news...
          </p>
        ) : categoryNews.length > 0 ? (
          <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-blue-100 text-gray-700 text-left text-sm uppercase font-semibold tracking-wider text-start">
                <th className="px-6 py-3">#</th>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {categoryNews.map((news, index) => (
                <tr
                  key={news._id}
                  className="hover:bg-gray-50 transition duration-300"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {news.title}
                  </td>
                  <td className="px-6 py-4 text-blue-600 font-semibold">
                    {news.category}
                  </td>
                  <td className="px-6 py-4 flex flex-col md:flex-row justify-center items-center gap-4">
                    <Link
                      to={`/dashboard/update/${news._id}`}
                      title="Edit"
                      className="text-blue-600 hover:text-blue-800 transition"
                    >
                      <FaEdit size={18} />
                    </Link>
                    <button
                      onClick={() => handleDelete(news._id)}
                      title="Delete"
                      className="text-red-500 hover:text-red-700 transition cursor-pointer"
                    >
                      <FaTrash size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-600 text-lg mt-10 animate- animate-[infinite] ">
            No news found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default GetAllNews;

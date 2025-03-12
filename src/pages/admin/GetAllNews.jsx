import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contextAPI/AuthProvider";
import { Link } from "react-router-dom";
import UseAxiosPublic from "../../customHook/UseAxios";
import Swal from "sweetalert2";

const GetAllNews = () => {
  const { newses, loading } = useContext(AuthContext);
  const [categoryNews, setCategoryNews] = useState(newses); // Initial state with all news
  const [selectedCategory, setSelectedCategory] = useState("all");
  const axiosPublic = UseAxiosPublic();

  // Effect to handle filtering based on selected category
  useEffect(() => {
    if (selectedCategory === "all") {
      setCategoryNews(newses); // Show all news
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
    <div className="w-full h-screen overflow-auto overflow-x-hidden  bg-gray-200  ">
      {/* Category Filter */}
      <div className="w-full md:w-1/3 mx-auto p-4 border-b border-gray-500 text-center flex justify-between items-center gap-2 mt-8 md:mt-0">
        <h1 className="text-2xl text-gray-700">
          Total News: {categoryNews.length}
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <h1>Search News By Category</h1>
          <select
            className="border border-gray-300 p-1 text-gray-700"
            value={selectedCategory} // Keep track of selected category
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

      {/* News Table */}
      <div className="overflow-x-auto w-full md:w-[80%] mx-auto mt-8  ">
        {loading ? (
          <p>Loading news...</p>
        ) : categoryNews.length > 0 ? (
          <table className="table w-full">
            <thead>
              <tr className="bg-gray-200">
                <th>SL</th>
                <th>Title</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categoryNews.map((news, index) => (
                <tr key={news._id} className="hover:bg-gray-100">
                  <td>{index + 1}</td>
                  <td>{news.title}</td>
                  <td>{news.category}</td>
                  <td className="flex gap-5">
                    <Link
                      to={`/dashboard/update/${news._id}`}
                      className="text-blue-500 "
                    >
                      Edit
                    </Link>
                    <Link
                      onClick={() => handleDelete(news._id)}
                      className="text-red-600 "
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-600">
            No news found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default GetAllNews;

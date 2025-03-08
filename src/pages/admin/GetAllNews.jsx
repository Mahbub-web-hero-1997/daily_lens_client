import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contextAPI/AuthProvider";

const GetAllNews = () => {
  const { newses, loading } = useContext(AuthContext);
  const [categoryNews, setCategoryNews] = useState(newses); // Initial state with all news
  const [selectedCategory, setSelectedCategory] = useState("all");

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

  return (
    <div className="w-full h-screen overflow-auto overflow-x-hidden  bg-gray-200  ">
      {/* Category Filter */}
      <div className="w-full md:w-1/3 mx-auto p-4 border-b border-gray-500 text-center flex justify-between items-center gap-2 mt-8 md:mt-0">
        <h1 className="text-2xl text-gray-700">
          Total News: {categoryNews.length}
        </h1>
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
                    <button className="text-blue-500 ">Edit</button>
                    <button className="text-red-500">Delete</button>
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

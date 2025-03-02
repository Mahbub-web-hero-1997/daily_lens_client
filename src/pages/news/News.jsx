import { useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  console.log(news?.data);
  return (
    <div>
      <h1>{news?.data?.title}</h1>
    </div>
  );
};

export default News;

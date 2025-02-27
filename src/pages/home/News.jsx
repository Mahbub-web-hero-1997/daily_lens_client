const News = ({ news }) => {
  const { title, description, image } = news;
  return (
    <>
      <div className="my-10">
        <img className="h-[300px] mx-auto" src={image} alt={title} />
        <h2>{title}</h2>
        <p className="text-justify p-2">{description.slice(0 - 250)}</p>
      </div>
    </>
  );
};

export default News;

import { useEffect, useState } from "react";

const Breaking = () => {
  const [newses, setNewses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/news/all")
      .then((res) => res.json())
      .then((data) => setNewses(data.data));
  }, []);
  return (
    <div>
      <h1>{newses.length}</h1>
    </div>
  );
};

export default Breaking;

import React, { useContext } from "react";
import { AuthContext } from "../../contextAPI/AuthProvider";
const Education = () => {
  const newses = useContext(AuthContext);
  console.log(newses.education);
  return (
    <div>
      <h1>This is Education Pages</h1>
    </div>
  );
};

export default Education;

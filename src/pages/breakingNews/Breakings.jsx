import { useContext } from "react";
import { AuthContext } from "../../contextAPI/AuthProvider";
import Breaking from "./Breaking";

const Breakings = () => {
  const breakings = useContext(AuthContext);
  console.log(breakings);
  return (
    <div>
      {breakings.breakings.map((breaking) => (
        <Breaking key={breaking._id} breaking={breaking} />
      ))}
    </div>
  );
};

export default Breakings;

import axios from "axios";
const axiosPublic = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

const UseAxios = () => {
  return axiosPublic;
};

export default UseAxios;

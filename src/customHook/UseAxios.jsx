import axios from "axios";
const axiosPublic = axios.create({
  baseURL: "https://daily-lens-server.vercel.app/api/v1",
  withCredentials: true,
});
const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;

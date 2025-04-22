// import axios from "axios";
// import Cookies from "js-cookie";
// const UseAxiosPrivate = () => {
//   const axiosPrivate = axios.create({
//     baseURL: "http://localhost:3000/api/v1",
//     withCredentials: true,
//   });
//   axiosPrivate.interceptors.request.use(
//     (config) => {
//       const token = Cookies.get("accessToken");
//       console.log(token);
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     },
//     (error) => Promise.reject(error)
//   );
//   return axiosPrivate;
// };

// export default UseAxiosPrivate;

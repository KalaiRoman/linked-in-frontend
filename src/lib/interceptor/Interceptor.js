// import axios from "axios";
// import envDatas from './../envTexts/EnvTexts';
// axios.interceptors.request.use(function (config) {
//   config.url = envDatas?.BaseUrl + config.url;
//   const tokens=false;
//   if (tokens) {
//     config.headers = {
//       ...config.headers,
//       "Content-Type": envDatas?.contentType,
//       "Authorization": `Bearer ${JSON.parse(tokens)}`,
//     };
//   }
//   config.withCredentials=envDatas?.withCredentials;
//     return config;
//   }, function (error) {
//     return error;
//   });

// axios.interceptors.response.use(function (response) {
//     return response;
//   }, function (error) {
   
//     return error;
//   });

// let axiosInstance=axios;
// export default axiosInstance;

import axios from "axios";
import envDatas from './../envTexts/EnvTexts';
const axiosInstance = axios.create({
  baseURL: envDatas?.BaseUrl,
});
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("userLinkedIn"); 
    if (token) {
      config.headers["Authorization"] = `Bearer ${JSON.parse(token)}`;
    }
    return config;
  },
  (error) => {
    return error;
  }
);

export default axiosInstance;

import axios from "axios";
import envDatas from './../envTexts/EnvTexts';
axios.interceptors.request.use(function (config) {
  config.url = envDatas?.BaseUrl + config.url;
  const tokens=false;
  if (tokens) {
    config.headers = {
      ...config.headers,
      "Content-Type": envDatas?.contentType,
      "Authorization": `Bearer ${JSON.parse(tokens)}`,
    };
  }
  config.withCredentials=envDatas?.withCredentials;
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
   
    return Promise.reject(error);
  });

let axiosInstance=axios;
export default axiosInstance;
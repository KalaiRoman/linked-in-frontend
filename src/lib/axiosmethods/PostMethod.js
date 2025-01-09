import axiosInstance from "../interceptor/Interceptor";
const postMethod=async(url,data,id)=>
{
    const Url=id?`${url}/${id}`:url;
    try {
        const response = await axiosInstance.post(Url, data);
        return response;      
      } catch (error) {

        return error;
      }
}
export default postMethod;
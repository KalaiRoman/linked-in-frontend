import axiosInstance from "../interceptor/Interceptor";

const getMethod=async(url,id)=>
{
    const Url=id?`${url}/${id}`:url;
    try {
        const response=await axiosInstance.get(Url);
        if(response)
        {
           return response;
        }
    } catch (error) {
       return error;
    }
}
export default getMethod;
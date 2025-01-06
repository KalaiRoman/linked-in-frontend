import axiosInstance from "../interceptor/Interceptor";

const getMethod=async(url,id)=>
{
    const Url=id?`${url}/${id}`:url;
    try {
        const response=await axiosInstance.get("");
        if(response)
        {
            return {
                status:true,
                message:"Get Method Success",
                data:response
            }
        }
    } catch (error) {
        return {
            status:false,
            message:"Get Method Error",
            data:""
        }
    }
}
export default getMethod;
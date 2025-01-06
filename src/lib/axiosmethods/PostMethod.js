import axiosInstance from "../interceptor/Interceptor";
const postMethod=async(url,data,id)=>
{
    const Url=id?`${url}/${id}`:url;
    try {
        const response=await axiosInstance.post("");
        if(response)
        {
            return {
                status:true,
                message:"Post Method Success",
                data:response
            }
        }
    } catch (error) {
        return {
            status:false,
            message:"Post Method Error",
            data:""
        }
    }
}
export default postMethod;
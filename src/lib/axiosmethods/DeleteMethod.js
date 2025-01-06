import axiosInstance from "../interceptor/Interceptor";

const deleteMethod=async(url,id)=>
{
    const Url=id?`${url}/${id}`:url;
    try {
        const response=await axiosInstance.delete("");
        if(response)
        {
            return {
                status:true,
                message:"delete Method Success",
                data:response
            }
        }
    } catch (error) {
        return {
            status:false,
            message:"delete Method Error",
            data:""
        }
    }
}
export default deleteMethod;
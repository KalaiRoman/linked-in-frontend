import axiosInstance from "../interceptor/Interceptor";
const putMethod=async(url,id,data)=>
{
    const Url=id?`${url}/${id}`:url;
    try {
        const response=await axiosInstance.put("");
        if(response)
        {
            return {
                status:true,
                message:"put Method Success",
                data:response
            }
        }
    } catch (error) {
        return {
            status:false,
            message:"put Method Error",
            data:""
        }
    }
}
export default putMethod;
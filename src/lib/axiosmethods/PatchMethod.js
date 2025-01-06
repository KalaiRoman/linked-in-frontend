import axios from "axios";

const patchMethod=async(url,id,data)=>
{
    const Url=id?`${url}/${id}`:url;
    try {
        const response=await axios.patch("");
        if(response)
        {
            return {
                status:true,
                message:"patch Method Success",
                data:response
            }
        }
    } catch (error) {
        return {
            status:false,
            message:"patch Method Error",
            data:""
        }
    }
}
export default patchMethod;
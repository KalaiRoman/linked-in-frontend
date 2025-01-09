import allApis from "../lib/allApis/AllApis";
import postMethod from "../lib/axiosmethods/PostMethod"

export const RegisterUser=async(data)=>{
    try {
        const response=await postMethod(allApis?.register,data,"");
        if(response)
        {
            return response?.data;
        }
    } catch (error) {
        return error;
    }
}

export const LoginUser=async(data)=>{
    try {
        const response=await postMethod(allApis?.login,data,"");
        if(response)
        {
            return response?.data;
        }
    } catch (error) {
        return error;
    }
}
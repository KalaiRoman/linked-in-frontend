import allApis from "../lib/allApis/AllApis";
import getMethod from './../lib/axiosmethods/GetMethod';

export const postGetAll=async()=>{
    try {
        const response=await getMethod(allApis?.postget,"");
        if(response)
        {
            return response?.data;
        }
    } catch (error) {
        return error;
    }
}
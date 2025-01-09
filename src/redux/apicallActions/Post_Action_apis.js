
import { getAllPostActions } from '../reducers/Post_reducer';
import { postGetAll } from './../../services/post_services';

export const getPost_actions=()=>async(dispatch)=>{
    try {
        const response=await postGetAll();
        if(response)
        {
            dispatch(getAllPostActions(response?.data));
        }
    } catch (error) {
        console.log(error);
    }
}
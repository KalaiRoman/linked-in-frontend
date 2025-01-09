import { createSlice } from "@reduxjs/toolkit";


const post_reducer=createSlice({
    name:"posts",
    initialState:{
        posts:[]
    },
    reducers:{
        getAllPostActions:(state,action)=>{

            console.log(action.payload,"klll")
            state.posts=action.payload;
        }
    }
});

export const {getAllPostActions}=post_reducer?.actions;
export default post_reducer.reducer;
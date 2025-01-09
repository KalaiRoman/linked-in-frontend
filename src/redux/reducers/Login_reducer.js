import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
const Login_reducer=createSlice({
    name:"Login",
    initialState:{
        login:{},
        userId:""
    },
    reducers:{
        RegisterAction:(state,action)=>{
           state.login=action.payload;
        },
        UserIdAction:(state,action)=>{
            const token=localStorage.getItem("userLinkedIn")?JSON.parse(localStorage.getItem("userLinkedIn")):"";
            const decoded = jwtDecode(token);
            console.log(decoded,"decoded")
            state.userId=decoded?.user;
        },
        logoutUserAction:(state,action)=>{
            localStorage.clear();
            window.location.assign("/")
        }
    }
});

export const {RegisterAction,UserIdAction,logoutUserAction}=Login_reducer.actions;
export default Login_reducer.reducer;


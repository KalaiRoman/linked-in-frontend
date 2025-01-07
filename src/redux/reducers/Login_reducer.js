import { createSlice } from "@reduxjs/toolkit";

const Login_reducer=createSlice({
    name:"Login",
    initialState:{
        login:""
    },
    reducers:{
        LoginAction:(state,action)=>{

        },
        RegisterAction:(state,action)=>{
            console.log(action.payload)
        },

    }
});

export const {LoginAction,RegisterAction}=Login_reducer.actions;
export default Login_reducer.reducer;


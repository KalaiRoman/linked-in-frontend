import { createSlice } from "@reduxjs/toolkit";

const Login_reducer=createSlice({
    name:"Login",
    initialState:{
        login:""
    },
    reducers:{
        LoginAction:(state,action)=>{

        }
    }
});

export const {LoginAction}=Login_reducer.actions;
export default Login_reducer.reducer;


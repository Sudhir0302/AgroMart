import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user: null,
};

export const loginSlice=createSlice({
    name:"login",
    initialState,
    reducers:{
        setLogin:(state,action)=>{
            state.user=action.payload;
            console.log("user detail : ",state.user);
        }
    }
})


export const {setLogin} =loginSlice.actions;

export default loginSlice.reducer;
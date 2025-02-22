import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "../slices/cartSlice";
// import  userReducer from "../slices/userSlice";
import  loginReducer from "../slices/loginSlice";


const store=configureStore({
    reducer:{
        cartdetails:cartReducer,
        // userdetails:userReducer,
        login:loginReducer
    }
})

export default store;   
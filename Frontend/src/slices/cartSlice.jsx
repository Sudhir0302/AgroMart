import { createSlice } from "@reduxjs/toolkit";


const initialState={
    cart:[],
};

//cart structure
// Qnty : ""
// product : ""
// username : ""

export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        setCart:(state,action)=>{
            // state.cart=[...state.cart,action.payload];
            const {product,Qnty,username}=action.payload;

            const existing=state.cart.find(item=>item.product===product);

            if(existing){
                existing.Qnty+=Qnty;
            }else{
                state.cart.push({product,Qnty,username});
            }
        }   
    }
});

export const {setCart}=cartSlice.actions;

export default cartSlice.reducer;
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
            const {product,Qnty,username}=action.payload;

            const existing=state.cart.find(item=>item.product===product&&item.username===username);

            if(existing){
                existing.Qnty+=Number(Qnty);
            }else{
                state.cart.push({product,Qnty:Number(Qnty),username});
            }
        }   
    }
});

export const {setCart}=cartSlice.actions;

export default cartSlice.reducer;
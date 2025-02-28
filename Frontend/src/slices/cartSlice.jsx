import { createSlice } from "@reduxjs/toolkit";


const initialState={
    cart:[],
};

//cart structure
// qnty : ""
// product : ""
// username : ""

export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        setCart:(state,action)=>{
            const {product,qnty,username}=action.payload;

            const existing=state.cart.find(item=>item.product===product&&item.username===username);

            if(existing){
                existing.qnty+=Number(qnty);
            }else{
                state.cart.push({product,qnty:Number(qnty),username});
            }
        },
        removeFromCart:(state,action)=>{
            const { product, username } = action.payload;
            state.cart = state.cart.filter(item => !(item.product === product && item.username === username));
        }
    }
});

export const {setCart,removeFromCart}=cartSlice.actions;

export default cartSlice.reducer;
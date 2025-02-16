import { createSlice } from "@reduxjs/toolkit";

const initialState={
    users:[]
};

//user array structure
// username:"",
// email:"",
// phoneno:"",
// password:"",
//cart:[]

export const userSlice=createSlice({
    name:"users",
    initialState,
    reducers:{
        setUsers:(state,action)=>{
            state.users=[...state.users,action.payload];
            console.log(`add user:`, JSON.parse(JSON.stringify(state)));
        },
        updateUserCart: (state, action) => {
            const { username, cart } = action.payload;
            
            state.users = state.users.map(user =>
                user.username === username ? { ...user, cart } : user
            );

        }
    }
});

export const {setUsers,updateUserCart} = userSlice.actions;

export default userSlice.reducer;
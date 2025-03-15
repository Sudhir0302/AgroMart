import axios from 'axios';
import React, { useState } from 'react';
import { BiMinus, BiPlus, BiTrash } from 'react-icons/bi';
import { GrUpdate } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateCart } from '../slices/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartdetails.cart); 

  const handleMinus=(product,qnty,username)=>{
    qnty-=1;
    if(qnty<0){
      qnty=0;
    }
    dispatch(updateCart({product,qnty,username}));
    console.log(qnty);
  }

  const handlePlus=(product,qnty,username)=>{
    dispatch(updateCart({product,qnty: qnty + 1,username}));
    // console.log(cart);
  }

  const handleDelete = async (product, user) => {
    const token=localStorage.getItem("token");

    try {
      const res = await axios.delete("http://localhost:8080/cart/delete", {
        params: { product, username: user },
        headers:{
          Authorization:`Bearer ${token}`
        }
      });

      if (res.status === 200) {
        dispatch(removeFromCart({ product, username: user }));
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleUpdate = async (product,qnty,username) => {
    const token=localStorage.getItem("token");
    console.log(qnty);
    try {
      const res = await axios.put("http://localhost:8080/cart/updatecart",
          {
            product,qnty,username
          },
          {
            headers:{
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json", 
            }
          }
      );

    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <div className='flex flex-col text-center m-16'>
      <h1 className='text-2xl border border-green-700 bg-gray-600 text-white'>Cart Details</h1>
      <div className='flex justify-center flex-wrap p-10'>
        {cart.length > 0 ? (
          cart.map((data, ind) => (
            <div key={ind} className='flex items-center gap-4 border p-4 rounded-lg shadow-md bg-gray-100'>
              <h1 className='text-lg w-32'>{data.product}</h1>
              <div className='flex gap-0 p-2'>
                <button onClick={()=>handleMinus(data.product,data.qnty,data.username)}><BiMinus/></button>
                <h1 className='text-lg w-32'>{data.qnty}</h1>
                <button onClick={()=>handlePlus(data.product,data.qnty,data.username)}><BiPlus/></button>
              </div>
              <button 
                onClick={()=>handleUpdate(data.product,data.qnty,data.username)}
                title="Update"
              > 
                  <GrUpdate/>
              </button>
              <button 
                onClick={() => handleDelete(data.product, data.username)}
                title="Delete"
              >
                <BiTrash/>
              </button>
            </div>
          ))
        ) : (
          <h2 className="text-xl text-gray-500 mt-4">Cart is empty</h2>
        )}
      </div>
    </div>
  );
};

export default Cart;

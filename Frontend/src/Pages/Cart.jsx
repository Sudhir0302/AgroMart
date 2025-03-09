import axios from 'axios';
import React from 'react';
import { BiTrash } from 'react-icons/bi';
import { GrUpdate } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../slices/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartdetails.cart); 

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

  return (
    <div className='flex flex-col text-center m-16'>
      <h1 className='text-2xl border border-green-700 bg-gray-600 text-white'>Cart Details</h1>
      <div className='flex justify-center flex-wrap p-10'>
        {cart.length > 0 ? (
          cart.map((data, ind) => (
            <div key={ind} className='flex items-center gap-4 border p-4 rounded-lg shadow-md bg-gray-100'>
              <h1 className='text-lg w-32'>{data.product}</h1>
              <h1 className='text-lg w-32'>{data.qnty}</h1>
              <button><GrUpdate/></button>
              <button onClick={() => handleDelete(data.product, data.username)}><BiTrash/></button>
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

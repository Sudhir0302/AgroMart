import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import Products from '../Components/Products';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../slices/cartSlice';

const Home = () => {
  
  //here the user specifies reducer name
  
  // const user=useSelector((state)=>state.login.user);

  // const dispatch=useDispatch();


  //here the user specifies state name
  // useEffect(()=>{
  //   console.log(user.username);
  // },[])

  return (
    <div className=''>
      <div className='flex flex-col'>
        <h1 className='text-center text-3xl'>AgroMart</h1>
        <div className='m-3'>
          <h1 className='text-2xl ml-7'>Today deals!!</h1>
          <Products />
        </div>
        <div className='m-3'>
          <h1 className='text-2xl text-center'>Our Products</h1>
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;

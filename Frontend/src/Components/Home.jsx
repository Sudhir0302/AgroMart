import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import Products from '../Categories/Products';

const Home = () => {

  useEffect(()=>{
      const fetch=async()=>{
         const res=await axios.get("http://localhost:8080/users");
         console.log(res.data);
      }
      fetch();
  },[])
  
  return (
    <div className=''>
      <Navbar />
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

import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Products from './Products';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 
import DailySpecial from '../Categories/DailySpecial';
import axios from 'axios';

const Home = () => {

  useEffect(()=>{
      const fetch=async()=>{
         const res=await axios.get("http://localhost:8080/home");
         console.log(res);
      }
      fetch();
  })
  return (
    <div className=''>
      <Navbar />
      <div className='flex flex-col'>
        <h1 className='text-center text-3xl'>AgroMart</h1>
        <div className='m-3'>
          <DailySpecial />
        </div>
      </div>
    </div>
  );
};

export default Home;

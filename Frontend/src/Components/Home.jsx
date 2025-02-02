import React, { useRef } from 'react';
import Navbar from './Navbar';
import Products from './Products';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 
import DailySpecial from '../Categories/DailySpecial';

const Home = () => {

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

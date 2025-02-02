import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 
import Products from '../Components/Products';

const DailySpecial = () => {

    let a = [1, 2, 3, 4, 5, 98, 456, 456, 23, 78, 99, 101]; 
    const scrollRef = useRef(null);

    const scroll = (direction) => {
    if (scrollRef.current) {
        const { current } = scrollRef;
        current.scrollBy({ left: direction === 'left' ? -250 : 250, behavior: 'smooth' });
    }
    };
    
  return (
    <div>
        <div className="relative  m-8">
            <h1 className='text-2xl ml-7'>Today deals!!</h1>
            <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md"
            >
            <FaChevronLeft size={20} />
            </button>
            <div ref={scrollRef} className="flex overflow-x-auto space-x-4 scrollbar-hide w-full p-2">
            <div className="flex w-max space-x-16">
                {a.map((d, index) => (
                <Products key={index} />
                ))} 
            </div>
            </div>
            <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md"
            >
            <FaChevronRight size={20} />
            </button>
        </div>
    </div>
  )
}

export default DailySpecial
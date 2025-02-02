import React, { useState } from 'react'

const Products = () => {

    const[count,setCount]=useState(0);

    const handleClick = (e) => {
        e.preventDefault(); 
        alert("hello");
    };

    const handleplus=(e)=>{
        e.preventDefault();
        setCount(count+1);
    }

    const handleminus=(e)=>{
        e.preventDefault();
        if(count>=1){
            setCount(count-1);
        }
    }
        
  return (
    <div>
    <div className="bg-gray-300 w-fit h-1/4 p-3 m-5 flex flex-col gap-4 items-center">
      <img src="/steve.jpg" className="w-32 h-32" alt="Product" />
      <h2>Product name</h2>
      <select className="w-44 p-1" onMouseDown={handleClick}>
        <option>1 kg</option>
      </select>

      <div className="flex items-center justify-between w-full">
        <h1>$1</h1>
        <button className="bg-gray-400 px-2 py-1 rounded" onClick={handleminus}>-</button>
        <h1>{count}</h1>
        <button className="bg-gray-400 px-2 py-1 rounded" onClick={handleplus}>+</button>
      </div>
      <button className='bg-green-300 p-2 font-bold'>Add to cart</button>
    </div>
  </div>
  )
}

export default Products
import React, { useState } from 'react';

const ProductLayout = ({ imgurl }) => {
    const [count, setCount] = useState(0);
    const [Qnty, setQnty] = useState(1);
    const [Added, setAdded] = useState(false);

    const handleCart = (e) => {
        e.preventDefault();
        setAdded(true);
    };

    const handlePlus = (e) => {
        e.preventDefault();
        setCount(count + 1);
    };

    const handleMinus = (e) => {
        e.preventDefault();
        if (count >= 1) setCount(count - 1);
    };

    const handleQnty = (e) => {
        e.preventDefault();
        setQnty(e.target.value);
    };

    return (
        <div className="relative">
            <div className="bg-gray-300 w-64 h-80 p-3 m-5 flex flex-col gap-3 items-center rounded-lg shadow-lg">
          
                <img src={imgurl} className="w-32 h-28 object-cover rounded-md" alt="Product" />

              
                <h2 className="text-lg font-bold text-center leading-tight h-10 overflow-hidden">
                    Product Name
                </h2>

                <select className="w-44 p-1 border border-gray-400 rounded" onChange={handleQnty}>
                    <option value={1}>1 kg</option>
                    <option value={2}>2 kg</option>
                    <option value={0.5}>0.5 kg</option>
                </select> 

                <div className="flex items-center justify-between w-full px-4">
                    <h1 className="text-md font-semibold">$1</h1>
                    <button className="bg-gray-400 px-2 py-1 rounded" onClick={handleMinus}>-</button>
                    <h1 className="px-3">{count}</h1>
                    <button className="bg-gray-400 px-2 py-1 rounded" onClick={handlePlus}>+</button>
                </div>

                <button 
                    className="bg-green-500 text-white p-2 w-full font-bold rounded hover:bg-green-600 transition"
                    onClick={handleCart}
                >
                    {Added ? 'Added' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
}

export default ProductLayout;

import React from 'react'

const Explore = () => {

    const handlejoin=(e)=>{
        e.preventDefault();
        alert("shop now");
    }
  return (
    <div className='min-h-screen p-8'>
        <div className='text-center flex flex-col items-center justify-center px-4'>
            <h1 className='font-bold text-3xl mb-4'>Explore</h1>
            <div className='max-w-md text-center'>
                <p>
                    Explore our products
                </p>
            </div><br></br>
            <button className='bg-green-500 text-white p-2 rounded-md w-36' onClick={handlejoin}>
                    Shop now
            </button>
        </div><br></br>
    </div>
  )
}

export default Explore
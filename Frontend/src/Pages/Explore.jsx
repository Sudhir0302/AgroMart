import React from 'react'

const Explore = () => {

    const handlejoin=(e)=>{
        e.preventDefault();
        alert("join now");
    }
  return (
    <div className='bg-black/95 text-white min-h-screen p-8'>
        <div className='text-center flex flex-col items-center justify-center px-4'>
            <h1 className='font-bold text-3xl mb-4'>Explore</h1>
            <div className='max-w-md text-center'>
                <p>
                    Explore the inspiring work created by our community and discover the impact of collaboration. Join Motren today and be part of something extraordinary!
                </p>
            </div><br></br>
            <button className='bg-blue-600 p-2 rounded-md w-36' onClick={handlejoin}>
                    Join now
            </button>
        </div><br></br>
        <h2 className='text-2xl font-bold'>Made on <span className='text-blue-500'>Motren</span></h2>
    </div>
  )
}

export default Explore
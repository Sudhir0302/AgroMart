import React from 'react'
import { useNavigate } from 'react-router'

const Navbar = () => {

  const navigate=useNavigate();
  
  const handleClick=(e)=>{
    e.preventDefault();
    navigate(`/${e.target.value}`)
  }

  return (
    <nav className='bg-green-200 h-full w-full'>
        <div className="flex items-center justify-between p-3">
        <h1 className="text-lg font-bold">AgroMart</h1>
        <div className="flex space-x-4">
          <button onClick={handleClick} value="home">Home</button>
          <button onClick={handleClick} value="cart">Cart</button>
          <button onClick={handleClick} value="contact">Contact</button>
          <button onClick={handleClick} value="about">About</button>
        </div>
        </div>
    </nav>
  
  )
}

export default Navbar
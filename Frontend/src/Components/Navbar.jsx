import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router'
import { setLogin } from '../slices/loginSlice';

const Navbar = () => {

  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector((state)=>state.login.user);

  const handleClick=(e)=>{
    e.preventDefault();
    navigate(`/${e.target.value}`)
  }

  const handleLogin=()=>{
    if(user){
      dispatch(setLogin(null));
      // navigate('/');
    }else{
      navigate('/');
    }
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
          <button onClick={handleClick} value="explore">Explore</button>
          <button onClick={handleLogin}>
            {user ? "Logout":"Login" }
          </button>
        </div>
        </div>
    </nav>
  
  )
}

export default Navbar
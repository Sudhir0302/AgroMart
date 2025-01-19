import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-green-200 h-full w-full'>
        <div className="flex items-center justify-between p-3">
        <h1 className="text-lg font-bold">AgroMart</h1>
        <div className="flex space-x-4">
            <h1>Home</h1>
            <h1>Cart</h1>
            <h1>Contact</h1>
            <h1>About</h1>
        </div>
        </div>
    </nav>
  
  )
}

export default Navbar
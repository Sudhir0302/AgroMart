import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import { Routes, Route, useLocation, Router } from 'react-router-dom';
import Explore from './Pages/Explore';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Signup from './Pages/Signup';

function App() {
  return (
      <div>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/Signup' element={<Signup />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/explore' element={<Explore />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import { Routes, Route, useLocation, Router } from 'react-router-dom';
import Explore from './Components/Explore';
import Login from './Pages/Login';
import Cart from './Components/Cart';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
      <div>
        <Routes>
          <Route path='/' element={<Login />}/>
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

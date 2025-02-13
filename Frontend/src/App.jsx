import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import { Routes, Route, useLocation, Router } from 'react-router-dom';
import Explore from './Components/Explore';
import Login from './Pages/Login';

function App() {
  return (
      <div>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/explore' element={<Explore />}/>
        </Routes>
      </div>
  )
}

export default App

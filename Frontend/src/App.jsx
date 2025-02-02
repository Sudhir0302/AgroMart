import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import { Routes, Route, useLocation, Router } from 'react-router-dom';
import Explore from './Components/Explore';

function App() {
  return (
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/explore' element={<Explore />}/>
        </Routes>
      </div>
  )
}

export default App

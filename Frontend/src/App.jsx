import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import { Routes, Route, useLocation, Router } from 'react-router-dom';

function App() {
  return (
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </div>
  )
}

export default App

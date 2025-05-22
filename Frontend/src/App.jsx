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
import Navbar from './Components/Navbar';
import Protected from './Components/Protected';
import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';

function App() {
  const loc=useLocation();

  const hide=loc.pathname==='/'||loc.pathname==='/Signup';


  const queryclient=new QueryClient({
    defaultOptions:{
      queries:{
        staleTime: 60*1000  //1 minute
      }
    }
  });

  return (
     <QueryClientProvider client={queryclient}>
        {!hide&&
          <Navbar />
        }
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/Signup' element={<Signup />}/>
          <Route element={<Protected />}>
            <Route path='/home' element={<Home />}/>
            <Route path='/explore' element={<Explore />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
          </Route>
          <Route path='*' element={<h2>404 page not found</h2>} />
        </Routes>
      </QueryClientProvider>
  )
}

export default App

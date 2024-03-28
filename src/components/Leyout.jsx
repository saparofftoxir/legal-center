import React from 'react'
import Navbar from '../pages/Navbar';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main'
function Leyout() {
  return (
    <div className='w-full h-screen'>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Main/>}/>

        </Routes>
        
      
    </div>
  )
}

export default Leyout;

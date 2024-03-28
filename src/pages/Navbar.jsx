import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='container px-5 pt-7'>
      <ul className='w-full flex items-center justify-between '>
        <li className='flex items-center gap-x-5'>
          <NavLink className='flex items-center' to={'/'}>
            <img className='w-40' src="./src/assets/legal_center_logo.svg" alt="" />
          </NavLink>
          <NavLink>
            <p className='text-xs'>Первый цифровой международный <br /> юридический центр</p>
          </NavLink>
        </li>
        <li>
          <div className='flex items-center gap-x-4'>
            <h2 className='font-bold cursor-pointer'> 99 (850) 570 2928</h2>
            <button className='p-2 w-24 rounded-xl text-white bg-blue-950 hover:bg-blue-800 leading-5 transition ring-blue-800 focus:ring-2'>Войти</button>
          </div>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar

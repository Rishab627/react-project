import React from 'react'
import { NavLink } from 'react-router-dom'



const Header = () => {
  return (
   <header className='bg-black text-white flex items-end justify-between px-4 py-2'>
    <h1 className='text-3xl'> Web Page</h1>

    <nav>
       <NavLink to='about' className= {(e) =>{ 
        return e.isActive ? 'hover:bg-white hover:text-black px-4 py-3 text-pink-950' : 'hover:bg-white hover:text-black px-4 py-3'
       }} >About</NavLink>
       <NavLink to='contact' className='hover:bg-white hover:text-black px-4 py-3'>Contact</NavLink>

    </nav>
   </header>
  )
}

export default Header
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>


      <h1>This is Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa eum aspernatur. Aspernatur, libero fugit nulla in culpa dolorem. Incidunt?</p>
      <p>----------------------------------- --------------------------------------------------------------------------</p>
      
      <div className="navs divide-x-4 divide-slate-950">
      <NavLink to='page1'>Page1</NavLink>
      <NavLink to='page2'>Page2</NavLink>
      </div>
    <Outlet />
    </div>
  )
}

export default Home
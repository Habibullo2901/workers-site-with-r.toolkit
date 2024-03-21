import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdPersonAdd } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";
import './Navbar.css'

const navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <NavLink to='/'><BsPeopleFill className='icon' /></NavLink>
        <NavLink to='/add'><IoMdPersonAdd className='icon' /></NavLink>
      </nav>
    </>
  )
}

export default navbar
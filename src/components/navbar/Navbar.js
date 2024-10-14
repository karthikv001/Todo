import React, { useState } from 'react';
import './navbar.css';
import logo from './../../assets/Logo.svg';
import { BsCart3 } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {

  const [open,setOpen] =useState(false)

  const toggle =()=>{
    setOpen(!open)
  }

  console.log(open)

  return (
    <nav>
      <div className='brand-logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className={`nav-items ${open && 'active'}`} >
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Testimonial</a>
        <a href='/'>Contact</a>
        <a href='/'><BsCart3 /></a>
        <a href='/'><button>Booking Now</button></a>

      </div>
      <div className='menu'onClick={toggle}>
      <CiMenuFries />
      
      </div>
    </nav>
  )
}

export default Navbar;
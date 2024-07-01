import React from 'react'
import logo from "../assets/img2.jpeg";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <div className='nav-bar'>
        <img className="logo-img" src={logo} alt="Logo" />
        <h1 className='head-text'>Career MasterClass Registraton</h1>
      </div>
    </nav>
  )
}

export default Navbar
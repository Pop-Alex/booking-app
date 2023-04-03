import React, { useState } from 'react'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './compStyle.css'
import logo from '../img/logo.png'
const Navbar = () => {
    const [navbarToggle,setNavbatToggle] = useState(false)

    const handleToggleNavbar = ()=>{
        setNavbatToggle(!navbarToggle)
    }
  return (
    <div className="navbar">
        <div className="nav-center">
            <div className="nav-content">
                <Link to='/'>
                <img src={logo} alt="logo" className='logo' /></Link>
                <button className='nav-btn'>
                <FaAlignRight onClick={()=>handleToggleNavbar()}/>
            </button>
            </div>
            <ul className={navbarToggle? "nav-links show-nav" : "nav-links"}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/places'>Places</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar

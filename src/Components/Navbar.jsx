import React from 'react'
import Logo from '../Icons/Logo.png'
import Profile from '../Icons/account.png'
import Down from '../Icons/Down.png'
import WhiteDown from '../Icons/WhiteDown.png'
import '../Styles/Nav.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='Navbar'>
        <div>
            <Link to='/'><img className='logo' src ={Logo} alt="Logo" /> </Link>
        </div>

        <ul>
            <li className='displ'>My Assignment</li>
            <li className='displ'>Chat with Mentor</li>
            <li className='profile'> 
                <img id='icn' src={Profile} alt='Profile' /> 
                ProfileName
                <img src={Down} alt='Down' /> 
                <img id='icon' src={WhiteDown} alt='Down' /> 
            </li>
        </ul>
    </div>
  )
}

export default Navbar
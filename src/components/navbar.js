import React from 'react'
import image from './logo.jpg'
import { Link } from 'react-router-dom'
import "./navbar.css"
export default function navbar() {
  return (
    <div className='navbar'>
        <img src={image} alt="logo" />
        <ul>
            <Link to="/signup"><li>Sign Up</li></Link>
            <Link to="/signin"><li>Sign In</li></Link>
            <Link to="/Profile"><li>Profile</li></Link>
            <Link to="/createpost"><li>Create Post</li></Link>
        </ul>
    </div>
  )
}

import React from 'react'
import image from './logo.jpg'
import { Link } from 'react-router-dom'
import "./navbar.css"
export default function navbar({login}) {
  const loginStatus=()=>{
    const token = localStorage.getItem("jwt")
    if(login ||token){
      return[
        <>
        <Link to="/Profile"><li>Profile</li></Link>
            <Link to="/createpost"><li>Create Post</li></Link>
        </>
      ]
    }else{
      return[
        <>
         <Link to="/signup"><li>Sign Up</li></Link>
            <Link to="/signin"><li>Sign In</li></Link>
        </>
      ]
    }
  }
  return (
    <div className='navbar'>
        <img src={image} alt="logo" />
        <ul>
           {loginStatus()}
            
        </ul>
    </div>
  )
}

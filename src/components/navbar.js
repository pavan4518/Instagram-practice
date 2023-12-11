import React, {useContext } from 'react'
import image from './logo.jpg'
import { Link } from 'react-router-dom'
import { LoginContext } from '../Context/loginContext'
import "./navbar.css"




export default function Navbar({ login }) {
  const {setModalOpen} = useContext(LoginContext)

  const loginStatus = () => {

    const token = localStorage.getItem("jwt")
    if (login || token) {
      return [
        <>
          <Link to="/Profile"><li>Profile</li></Link>
          <Link to="/createpost"><li>Create Post</li></Link>
          <Link to={""}> <button className='primarybtn' onClick={() => setModalOpen(true)}>Log Out</button>
          </Link>
        </>
      ]
    } else {
      return [
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

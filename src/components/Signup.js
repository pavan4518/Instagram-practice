import React from 'react'
import logo from "./logo.jpg"
import { Link } from "react-router-dom"
import "./signup.css"

export default function Signup() {
    return (
        <div className='signup'>
            <div className='form-container'>
                <div className='form'>
                    <img className="signUpLogo" src={logo} alt="logo" />
                    <p className='loginpara'>
                        sign up to see your photos and videos
                        <br />From Friend
                    </p>

                    <div>
                        <input type='email' placeholder='Enter Your Email' id="email" name="email" />
                    </div>
                    <div>
                        <input type="text" placeholder='Enter Your Name ' name='name' id="name" />
                    </div>
                    <div>
                        <input type='text' placeholder='Enter Your Username' id="username" name="username" />
                    </div>
                    <div>
                        <input type='password' placeholder='password' id="password" name='password' />
                    </div>
                    <p
                        className="loginpara"
                        style={{ fontSize: "12px", margin: "3px 0px" }}
                    >
                        By signing up , you agree to to out Terms, <br />
                        privacy policy and cookies policy
                    </p>
                    <button>SignUp</button>

                    <div className='form2'>
                        Already have account ?
                        <span> <Link to="/signin">SignIn</Link></span>
                    </div>
                </div>

            </div>


        </div>
    )
}
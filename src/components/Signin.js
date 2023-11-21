import React from 'react'
import logo from "./logo.jpg"
import { Link } from "react-router-dom"
import "./signin.css"

export default function Signin() {
  return (
    <div className='signin'>
            <div >
                <div className='form'>
                    <img className="signUpLogo" src={logo} alt="logo" />
                    

                    <div>
                        <input type='email' placeholder='Enter Your Email' id="email" name="email" />
                    </div>
                    
                    
                    <div>
                        <input type='password' placeholder='password' id="password" name='password' />
                    </div>
                   
                    
                    <button type='summit'style={{"width":"100", "padding":"4px", "background-color":"primary","cursor":"pointer"}}>SignUp</button>
                    </div>

                    <div className='form2'>
                        Don't Have account 
                        <span> <Link to="/signup">SignUp</Link></span>
                    </div>
                

            </div>


        </div>
    )
}

  


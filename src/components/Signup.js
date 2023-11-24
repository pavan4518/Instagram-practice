import React, { useState } from 'react'
import logo from "./logo.jpg"
import { Link } from "react-router-dom"
import "./signup.css"


export default function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const postdata = () => {
       fetch("http://localhost:5000/signup",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
       name:name,
       userName:userName,
       email:email,
       password:password

        })
       }).then(res=>res.json())
       .then(data=>{console.log(data)})
    }

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
                        <input type='email' placeholder='Enter Your Email' id="email" name="email" value={name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div>
                        <input type="text" placeholder='Enter Your Name ' name='name' id="name" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div>
                        <input type='text' placeholder='Enter Your Username' id="username" name="username" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
                    </div>
                    <div>
                        <input type='password' placeholder='password' id="password" name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <p
                        className="loginpara"
                        style={{ fontSize: "12px", margin: "3px 0px" }}
                    >
                        By signing up , you agree to to out Terms, <br />
                        privacy policy and cookies policy
                    </p>

                    <button type='summit' style={{ "width": "80%", "padding": "4px", "background-color": "rgb(75, 75, 234);", "cursor": "pointer" }} onClick={() => { postdata() }}>SignUp</button>
                </div>

                <div className='form2'>
                    Already have account ?
                    <span> <Link to="/signin">SignIn</Link></span>
                </div>


            </div>


        </div>
    )
}

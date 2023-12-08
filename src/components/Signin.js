import React from "react";
import "./signin.css";
import logo from "./logo.jpg"
import {Link,useNavigate} from "react-router-dom"
import {  toast } from 'react-toastify';
import { useState,useContext } from "react";
import { LoginContext } from "../Context/loginContext";





export default function Signin() {
const{setUserLogin}=useContext(LoginContext)
  const navigate =useNavigate()
  
  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")
  

  const notifyA =(msg) => toast.error(msg);
  const notifyB =(message) => toast.success(message);
  const emailRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const postData=()=>{
    if (!emailRegex.test(email)){
      notifyA("Invalid email")
      return
    }//else if (!passRegex.test(password)){
      //notifyA("Password must contain upperCase lowercase and spcial ")
    //}
    //return

   fetch("http://localhost:5000/signin",{
    method:"post",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
     
      email:email,
      
      password:password

    })
   }).then(res=>res.json())
   .then(data=>{
    if (data.error){
      notifyA(data.error)
    } else{
      notifyB("Sign In successfully")
      console.log(data)
      localStorage.setItem("jwt",data)
      setUserLogin(true)
      navigate("/")
    }
    notifyA()
    console.log(data)})
  }
    
  return (
    <div className="signin">
      <div>
        <div className="loginForm">
          <img className="signUpLogo" src={logo} alt="" />
          <div>
            <input type="email" name="email" id="email" value={email} placeholder="Email" onChange={(e)=>{setemail(e.target.value)}} />
          </div>

          <div>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e)=>{setpassword(e.target.value)}}
              placeholder="Enter password"
            /> 
            </div>
          <button type="button" className="btn btn-primary" onClick={()=>{postData()}}>SignIn </button>
        </div>
        <div className="loginForm2">Don't have Account<Link to="/signup"><span style={{color:"blue",cursor:"pointer"}}>SignUp</span></Link> </div>
      </div>
    </div>
  );
}
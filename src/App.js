
import './App.css';
import Home from './components/Home';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Signin from './components/Signin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Createpost from './components/Createpost';
import React,{createContext,useState} from "react"
import { LoginContext } from './Context/loginContext';


import Profile from './components/Profile';
import Modal from './Modal';


function App() {
  const[userLogin,setUserLogin]=useState(false)
  const[modalopen,setModalOpen]=useState(false)
  return (
    <BrowserRouter >
    <div className="App">
     
<LoginContext.Provider value={{setUserLogin,setModalOpen}}>
     <Navbar login={userLogin}/>
   <Routes>
    <Route path="/" element={<Home/>}></Route> 
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/signin" element={<Signin/>}></Route>
     <Route path="/profile" element={<Profile/>}></Route>
    <Route path="/createPost" element={<Createpost/>}></Route>
     
    </Routes>    
    <ToastContainer theme='dark'/>  
   {modalopen && <Modal setModalOpen={setModalOpen}/>}
      
    </LoginContext.Provider>
   
    </div>
    </BrowserRouter>
  );
}

export default App;

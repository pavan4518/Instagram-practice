
import './App.css';
import Home from './components/Home';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Signin from './components/Signin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Createpost from './components/Createpost';


import Profile from './components/Profile';


function App() {
  return (
    <BrowserRouter >
    <div className="App">
      
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}></Route> 
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/signin" element={<Signin/>}></Route>
     <Route path="/profile" element={<Profile/>}></Route>
    <Route path="/createPost" element={<Createpost/>}></Route>
     
    </Routes>    
    <ToastContainer theme='dark'/>  
    </div>
    </BrowserRouter>
  );
}

export default App;

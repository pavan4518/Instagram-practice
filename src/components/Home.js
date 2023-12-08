import React, { useEffect ,useState} from "react";
import "./Home.css"
import { useNavigate } from "react-router-dom";



 
export default function Home() {
        const[data,setdata]=useState([])
        const navigate=useNavigate()
    useEffect(()=>{
        const token=localStorage.getItem("jwt")
        if(!token){
         navigate("./signup")
        }
        //fetching all post
        fetch("http://localhost:5000/allposts",{
             headers:{
                "Authorization": "Bearer " + localStorage.getItem("jwt")
             }   
        }).then(res=>res.json())
        .then(result =>setdata(result))
        .catch(err=>console.log(err))

    },[])    
  return (
        
<div className="home">
        {data.map((posts)=>{
               return (
                <div className="card">
        {/*card header*/}
<div className="card-header">
<div className="card-pic">
<img
              src="https://images.unsplash.com/photo-1519674508766-db48af81ed1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9maWxlJTIwcGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60"
              alt=""
            />
</div>
<h5>pavan</h5>
</div>
        {/* card image*/}
<div className="card-image">
<img
            src={posts.photo}
            alt=""
          />
</div>
        {/*card-cotent*/}
<div className="card-content">
<span className="material-symbols-outlined">favorite</span>
<p>1 Like</p>
<p>{posts.bo}</p>
</div>
        {/*comment*/}
<div className="add-comment">
<span className="material-symbols-outlined">mood</span>
<input type="text" placeholder="add a comment" />
<button className="comment">post</button>
</div>
</div>
               )
        })}
      {/*card */}
<div className="card">
        {/*card header*/}
<div className="card-header">
<div className="card-pic">
<img
              src="https://images.unsplash.com/photo-1519674508766-db48af81ed1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9maWxlJTIwcGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60"
              alt=""
            />
</div>
<h5>ramesh</h5>
</div>
        {/* card image*/}
<div className="card-image">
<img
            src="https://images.unsplash.com/photo-1627012481660-64a3f3d8ebad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
            alt=""
          />
</div>
        {/*card-cotent*/}
<div className="card-content">
<span className="material-symbols-outlined">favorite</span>
<p>1 Like</p>
<p>This is amazing</p>
</div>
        {/*comment*/}
<div className="add-comment">
<span className="material-symbols-outlined">mood</span>
<input type="text" placeholder="add a comment" />
<button className="comment">post</button>
</div>
</div>
</div>
  );
}
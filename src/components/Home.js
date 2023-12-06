import React from "react";
import "./Home.css"
 
export default function Home() {
  return (
<div className="home">
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
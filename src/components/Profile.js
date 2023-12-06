import React from 'react'
import './Profile.css'
 
export default function Profile() {
  return (
<div className='profile'>
      {/*frame*/}
<div className="profile-frame">
<div className="pofile-pic">
<img src="https://images.unsplash.com/photo-1519674508766-db48af81ed1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9maWxlJTIwcGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60" alt="" />
</div>
            {/*profile data*/}
<div className="profile-data">
<h1>pavan </h1>
<div className="profile-info" style={{display:"flex"}}>
<p>40 posts</p>
<p>40 followers</p>
<p>40 following</p>
</div>
 
        </div>
</div>
<hr style={{
        width:"90%",
        opacity:"0.8",
        margin:"25px auto"
      }}/>
<div className="gallary">
<img src="https://images.unsplash.com/photo-1519674508766-db48af81ed1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9maWxlJTIwcGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60" alt=""  />
<img src="https://images.unsplash.com/photo-1519674508766-db48af81ed1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9maWxlJTIwcGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60" alt=""  />
<img src="https://images.unsplash.com/photo-1519674508766-db48af81ed1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9maWxlJTIwcGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60" alt=""  />
<img src="https://images.unsplash.com/photo-1519674508766-db48af81ed1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9maWxlJTIwcGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60" alt=""  />
<img src="https://images.unsplash.com/photo-1519674508766-db48af81ed1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9maWxlJTIwcGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60" alt=""  />
 
      </div>
</div>
  )
}
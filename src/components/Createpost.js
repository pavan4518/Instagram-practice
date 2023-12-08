import React from "react";
import './Createpost.css';
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export default function Createpost() {
  const [body, setbody] = useState("")
  const [img, setimg] = useState("")
  const [url, seturl] = useState("")
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (message) => toast.success(message);
  const navigate =useNavigate()

  useEffect(() => {
    if (url) {
      fetch("http://localhost:5000/createPost", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("jwt")

        },
        body: JSON.stringify({
          body,

        })
      }).then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }


  }, [url])

  //posting image to clodanary

  const postdetails = () => {
    console.log(body, img)
    const data = new FormData()
    data.append("file", img)
    data.append("upload_preset", "insta-clone")
    data.append("cloud_name", "dicjwbvao")
    fetch("https://api.cloudinary.com/v1_1/dicjwbvao/image/upload", {
      method: "post",
      body: data
    }).then(res => res.json())
      .then(data => seturl(data.url))
      .catch(err => console.log(err))

    //saving post to mongodb
    fetch("http://localhost:5000/createPost", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")

      },
      body: JSON.stringify({
        body,
        pic: url
      })
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          notifyA(data.error)
        } else {
          notifyB("successfully posted")
          navigate("/")
        }
      })
      .catch(err => console.log(err))
  }

  const loadfile = (event) => {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src)
    }
  }
  return (
    <div className="createPost">
      <div className="post-header">
        <h4 style={{ margin: "3px auto" }}>Create new Post</h4>
        <button id="post-btn" onClick={() => { postdetails() }}>share</button>
      </div>
      <div className="main-div">
        <img id="output" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAAClCAMAAAAK9c3oAAAAY1BMVEX///8AAACMjIzU1NTp6eliYmL09PSHh4e1tbXw8PCBgYErKyupqalFRUXt7e2EhITd3d3j4+NKSkppaWkVFRUMDAzKyso5OTlubm68vLyWlpZSUlIyMjIjIyMaGhqfn592dnawpcCKAAAEYklEQVR4nO2b63aiMBCAQSDcLQqCXPX9n3Kp5ArY2u7EnT1nvn/GNn4nwMwkJI5DEARBEARBEARBEARBEARBWMfPcheePPMBHVlUWXD8pIoYlKSfWHL8JAEaTmZT0nU/YEYzsirpuhGEpG/rnhRUENc8452dwwMs4Zn3nAFY8hCUFAB9mRT3pescoC8+kvCSsyYfTYCulo5CgJ62hMCWB4CethzI8ud42SG5J2HXmiEclWUbDJelmzE3OkJk6Q9mFNdyDR7LdpO7kiM6y2xcS7ruVdydWCzbHclZE5dlPO1JytSNxDLgVmNQz5+KQ8M/DydElgWXOre84cQLDN4fDkte5eeebIm5Zn9CY8n6x/9WegHJlv4uLRrLeonnZ6Pxpj0/KCyzJaB3RmO8dPiYlKGw5MPWGo0sfTReY2SWntHIlmhUHpFZrsZyRDaW0ZJ5EqPR5x2iuS+95eI2RunLY+ijfkNh6Szx8qI/5DwdjTUeS26RqjvztIi7wRGPJU807nTjDZ5Yz1iGF4el03Gp+aoXRz8Sjm7PMFnyO3ND7aCy9HZXusXjhMVSVBwGsjM0liJoKrRCDo/lHMd1zynQ0jomS6fogqUQqs6JsT6NynJO3nUbZVFUr1ZBkVk+gSzhIMtfwbzai9eNyCy9Mk/TNC9rsxmVpX+VQT0wXpRhsvT0wmjQQyYiy1Uib7SrjseyXlcbg5pfoLHcWQyupCYWS/FG2L0EYXARH0TthsTy5upiN6nZIZr3sM6QnEc2FZ9DNDPdWG74mERV2UrNK5IVmKNY+ncHFXw8OQ3KGQbLk4xAvb406MtJ5ei/yTL2j7vtjh7Ll4V+pSmHuCneYMmiwzUok+60/UqP5eX6e5XVz9A7IraW9Zm/F2tu23+q5VNy3442U8WHbctO+5VyvSNIbZTa3+/x8R5LFho/0xtzQyYTzur1hKKb3mB5XG99096OabF82rkXOCq+W7OMS3dNLkMiS0QeTL/awdamli2ZqsXUT6VCUwaasd3rTuLZtSxkLdao9OHyVM2kd7MboTT81KKlFgkfQUYre/xYLVf230nO2Sm3ZhlJSREJVT0WXOXwbGL5HpEtS7VZJJRvcaJtOX59mjl1ityOpbq8eiTUn9dlmF/rWqR0WEsmc8Zk7uw0V88vr24wtGKpqtphHQkLbcqdPo/lb7CMZZGQ1pu/8g8i5wXbL99oGavh2nt+WZH1U9Xc65eeG1uWMri5A9ixAnDLXr6cC+DOPoBbqiADeEDDmuVhs1L6F9iyfFbV/g47lheIXfoaVixHkHMZGjYsx9fD9YtYsJy87//2h8BbjvCSFiy/nsT8DnBLK2dSwC0B86IC3LL8QanzMvDVxiuzrZ8CfgoJ5qTdCsA5JK8re/CY7tS8a4hzZ2IBLYc+w/ch6mqI6sD6ecgJJHz8F2dLtVm4FYDO6Tq+Tc0QLBD/F+fHZ/zOhmfVgeddVniwFJDDSBAEQRAEQRAEQRAEQRAE8W/4AxxfMLogNk+KAAAAAElFTkSuQmCC" />
        <input type="file" accept="image/*" onChange={(event) => { loadfile(event); setimg(event.target.files[0]) }} />
      </div>
      <div className="datils">
        <div className="card-header">
          <div className="card-pic">
            <img
              src="https://images.unsplash.com/photo-1519674508766-db48af81ed1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9maWxlJTIwcGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60"
              alt=""
            />
          </div>
          <h5>ramesh</h5>
        </div>
        <textarea value={body} onChange={(e) => { setbody(e.target.value) }} type=" text" placeholder="Writea a caption "></textarea>
      </div>
    </div>
  );
}


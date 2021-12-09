import React from 'react';
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './PostCard.css';
import {images} from "../../images";


export default function PostCard({post, idx}) {


  const date = Date(post.createdAt).toString().substr(3,13);
  const time = Date(post.createdAt).toString().substr(15,14);


  return(
    <Link to= {`/posts/${post._id}`} id="card" >
        <div
         className = "postcard"
         style={{
          background: `url(${images[idx].image_path})  no-repeat center`,
          WebkitBackgroundSize: "cover",
        
        }}
         >
        <section id ="nametag">
          <br/>
          <div id="postname"><strong>{post.user.name}</strong></div>
          <br/>
          {post.name}
          <br/>
          {date}
          <br/>
          {time}
          </section>
        </div>
        </Link>
    );


}
import React from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './PostCard.css';

// How to connect route with PostCard?

export default function PostCard({post}) {
  const {id} = useParams();
  const date = Date(post.createdAt).toString().substr(0,16);
  console.log(date);
  // console.log(post);
      return(
        <div id = "postcard">
        <Link to= {`/items/${post._id}`}>
         {post.name}
         <br/>
         {date}
        </Link>
        </div>
    );


}
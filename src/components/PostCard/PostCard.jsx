import React from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// How to connect route with PostCard?

export default function PostCard({post}) {
  const {id} = useParams();
  console.log(id);
  console.log(post);
      return(
        <Link to= {`/items/${post._id}`}>
         {post.name}
        </Link>
    );


}
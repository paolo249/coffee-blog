import React from 'react';
import { useParams } from "react-router-dom";


// How to connect route with PostCard?

export default function PostDetailPage({uniquePost}) {
  const {id} = useParams();
 
  console.log(id);
  console.log(uniquePost);
  const post = uniquePost.find(p => p._id === id)
      return(
        <>
        <h1>PostDetailPage</h1>
          {post.name}
        </>
    );


}
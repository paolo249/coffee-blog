import React from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// How to connect route with PostCard?

export default function PostDetailPage({uniquePost, deletePost, setPosts}) {
  const {id} = useParams();
  console.log("id: ", id);
  const navigate = useNavigate();




  function handleDelete(id) {
    deletePost(id);

    setPosts(uniquePost.filter(post => id!==post._id));
    navigate('/');
    console.log("id: ", id);
}



 
  // console.log(uniquePost);
  const post = uniquePost.find(p => p._id === id)
      return(
        <div>
        <h1>PostDetailPage</h1>
          {post && post.name}
          <br/>
          {post && post.desc}
          <br/>
        <button type = "submit" onClick={() => handleDelete(post._id)}> DELETE </button>
      
        </div>
    );


}
import React from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";


// How to connect route with PostCard?
export default function PostDetailPage({uniquePost, deletePost, setPosts}) {
  const {id} = useParams();
  console.log("id: ", id);
  const navigate = useNavigate();




  function handleDelete(id) {
    deletePost(id);
    // setPosts(uniquePost.filter(post => id!==post._id));
    navigate('/');
    // console.log("id: ", id);
}

function handleUpdate(id) {
  // setPosts(uniquePost.filter(post => id!==post._id));
  navigate('/edit');
  
}
  
  

 
  // console.log(uniquePost);
  const post = uniquePost.find(p => p._id === id)
      return(
        <div>
        {/* <h1>PostDetailPage</h1> */}
         <h1>  {post && post.name}</h1>
          <br/>
          <h3>{post && post.desc}</h3>
          <br/>
        <button type = "submit" onClick={() => handleDelete(post._id)}> Delete </button>
        {/* <Link to = "/new/:id" post = {post}> Update </Link> */}
        <button type = "submit" onClick={() => handleUpdate(post._id)}> Update </button>
      
        </div>
    );


}
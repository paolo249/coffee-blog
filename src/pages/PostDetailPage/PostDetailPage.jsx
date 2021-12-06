import React from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// How to connect route with PostCard?
export default function PostDetailPage({uniquePost, deletePost,  setPosts}) {
  const {id} = useParams();
  console.log("id: ", id);
  const navigate = useNavigate();




  function handleDelete(id) {
    deletePost(id);

    setPosts(uniquePost.filter(post => id!==post._id));
    navigate('/');
    // console.log("id: ", id);
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
        <button type = "submit" onClick={() => navigate(`/new/:${id}`)}> Update </button>
      
        </div>
    );


}
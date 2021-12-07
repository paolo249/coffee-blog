import React, { useState } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import UpdatePostForm from '../../components/UpdatePostForm/UpdatePostForm';


// How to connect route with PostCard?
export default function PostDetailPage({uniquePost, deletePost, updatePost, user}) {
  const {id} = useParams();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(null);




function handleDelete(id) {
  deletePost(id);
  navigate('/');
}

function handleUpdate() {
    setShowForm(true); 
}



 const post = uniquePost.find(p => p._id === id) 

// console.log("post",post.user);
console.log("user",user._id);
console.log("postdd", post);
return(
  <div>
        
            {!showForm && <div>
            <h1>  {post && post.name}</h1>
            <br/>
            <h3>{post && post.desc}</h3>
            <p>{post.user.name}  </p> 
            </div>}
          <br/>
          {showForm && <UpdatePostForm post= {post} updatePost={updatePost} user = {user}/>}
       {!showForm && user._id === post.user._id && <div>
        <button type = "submit" onClick={() => handleDelete(post._id)}> Delete </button>
        <button type = "submit" onClick={() => handleUpdate(post._id)}> Update </button>
        </div>}

        </div>
    );


}
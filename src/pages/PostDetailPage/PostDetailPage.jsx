import React, { useState } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import UpdatePostForm from '../../components/UpdatePostForm/UpdatePostForm';


// How to connect route with PostCard?
export default function PostDetailPage({uniquePost, deletePost, setPosts, updatePost}) {
  const {id} = useParams();
  console.log("id: ", id);
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(null);




function handleDelete(id) {
  deletePost(id);
  // setPosts(uniquePost.filter(post => id!==post._id));
  // console.log("id: ", id);
}

function handleUpdate() {
    setShowForm(true);
    //  updatePost(id);

  
}
  
  

 
  // console.log(uniquePost);
  const post = uniquePost.find(p => p._id === id)
      return(
        <div>
        {/* <h1>PostDetailPage</h1> */}
            {!showForm && <div>
            <h1>  {post && post.name}</h1>
            <br/>
            <h3>{post && post.desc}</h3>
            </div>}
          <br/>
          {showForm && <UpdatePostForm post= {post} updatePost={updatePost}/>}
        <button type = "submit" onClick={() => handleDelete(post._id)}> Delete </button>
        {/* <Link to = "/new/:id" post = {post}> Update </Link> */}
        <button type = "submit" onClick={() => handleUpdate(post._id)}> Update </button>
      
        </div>
    );


}
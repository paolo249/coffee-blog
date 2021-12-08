import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import UpdatePostForm from '../../components/UpdatePostForm/UpdatePostForm';
import "./PostDetailPage.css";

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

return(
  <div>
        
            {!showForm && <div>
            <h1>  {post && post.name}</h1>
            <br/>
           <h4 className="description-name"> {post && post.desc} </h4>
            <h3> Created By {post.user.name}  </h3> 
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
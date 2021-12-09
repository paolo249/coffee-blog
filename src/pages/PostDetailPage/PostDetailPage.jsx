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
            <h1 id ="posttitle">  {post && post.name}</h1>
            <link href="https://fonts.googleapis.com/css?family=Josefin+Slab:400,600,700" rel="stylesheet"></link>
            <br/>
           <div className="description-name"
            style ={{backgroundColor: "beige"}}
           > {post && post.desc} </div>
            <h2> Created By: {post.user.name}  </h2> 
            </div>}
          <br/>
          {showForm && <UpdatePostForm post= {post} updatePost={updatePost} user = {user}/>}
       {!showForm && user._id === post.user._id && <div>
        <button type = "submit" onClick={() => handleDelete(post._id)} id="detaildelete"> Delete </button>
        <button type = "submit" onClick={() => handleUpdate(post._id)} id="detailupdate"> Update </button>
        </div>}

        </div>
    );


}
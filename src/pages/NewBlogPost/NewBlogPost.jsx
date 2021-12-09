import React from 'react';
import PostForm from "../../components/PostForm/PostForm";
import './NewBlogPost.css';




export default function NewBlogPost({addPost, user}) {

  return (
    <div>
      <h1 id = "NewBlogPost"> Add Blog Post</h1>
      <link href="https://fonts.googleapis.com/css?family=Josefin+Slab:400,600,700" rel="stylesheet"></link>
      <PostForm addPost = {addPost} user={user}/>

    </div>
  );
}
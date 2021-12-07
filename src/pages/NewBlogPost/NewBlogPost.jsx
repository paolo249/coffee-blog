import React from 'react';
import PostForm from "../../components/PostForm/PostForm";



export default function NewBlogPost({addPost, user}) {
 
  return (
    <>
      <h1>New Blog Post</h1>
      <PostForm addPost = {addPost} user={user}/>
    </>
  );
}
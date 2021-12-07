import React from 'react';
import { checkToken } from '../../utilities/users-service';
import PostForm from "../../components/PostForm/PostForm";
import {useState, useEffect} from "react";


//you want to Post Page

export default function NewBlogPost({addPost, user}) {
 
  return (
    <>
      <h1>New Blog Post</h1>
      <PostForm addPost = {addPost} user={user}/>
    </>
  );
}
import React from 'react';
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import PostForm from "../../components/PostForm/PostForm";
import "./PostPage.css";


import NewBlogPost from "../../pages/NewBlogPost/NewBlogPost";
import PostCard from "../../components/PostCard/PostCard";


// import * as itemsAPI from '../../utilities/items-api';

// function that adds a new post that Post Page to an array 
// take whatever post you have and add it to the array of posts
// 

export default function PostPage({posts}) {
const uniquePost = posts.map((p, i) =>   <PostCard post={p} key={i} /> ) 

  return (
    <div className="PostPage">
      <h1>PostPage</h1>
        <section>
       {uniquePost}
    
      </section>
    </div>
  );
}
import React from 'react';
import PostCard from "../../components/PostCard/PostCard";
import "./PostPage.css";



export default function PostPage({posts}) {
  const postList = posts.map((p, i) => <PostCard post={p} key={p._id} idx ={i}/>);
  
  return (
    <div className="PostPage" >
      <h1> Blog Posts </h1>
      <link href="https://fonts.googleapis.com/css?family=Josefin+Slab:400,600,700" rel="stylesheet"></link>
      <section id = "postpage" >
        {postList}
      </section>
    </div>
  );               
}
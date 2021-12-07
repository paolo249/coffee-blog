import React from 'react';
import PostCard from "../../components/PostCard/PostCard";
import "./PostPage.css";


export default function PostPage({posts}) {
  const postList = posts.map((p) => <PostCard post={p} key={p._id}/>);
  return (
    <div className="PostPage">
      <section id = "postpage">
        {postList}
      </section>
    </div>
  );               
}
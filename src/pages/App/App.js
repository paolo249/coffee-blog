import React, { useState,useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import PostPage from '../PostPage/PostPage';
import BlogListDetails from '../../components/BlogListDetails/BlogListDetails';
import NewBlogPost from '../NewBlogPost/NewBlogPost';
import About from '../About/About';
import PostDetailPage from '../../pages/PostDetailPage/PostDetailPage';
import Contact from '../Contact/Contact';
import NavBar from '../../components/NavBar/NavBar';
import * as itemsAPI from '../../utilities/items-api';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPosts] = useState([]);
  const uniquePost = posts.map((p, i) => p )
  console.log("Unique", posts);

  async function addPost(post) {
    const newItem = await itemsAPI.create(post);
    setPosts([...posts, newItem]);
  }
  
  useEffect( function() {
    async function getAllPosts() {
      const items = await itemsAPI.getAll();
      setPosts(items);
    }
    getAllPosts();
  }, [])



  // .filter() method to filter the post you clicked on to delete (maybe evt.target.name === e)
  // front end part: button for DELETE (send id#)
  //back end part: another async function for DELETE, go 
  // async function deletePost(post) {
  //   await itemsAPI.delete(post);
  //   setPosts([...posts, Item]);
  //   const newItem = await itemsAPI.create(post);
    // const updatedPosts = [...posts, newItem];
    // setPosts(updatedPosts);
  // }

  
 
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/" element={<PostPage user={user} setUser={setUser} posts={posts}/>}/>
            <Route path="/items/:id" element={<PostDetailPage uniquePost={uniquePost}/>}/>
            <Route path="/posts/:postId" element={<BlogListDetails  />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/new" element={<NewBlogPost addPost={addPost} />} />
            {/* Redirected to PostPage just in case visitor enters an ambiguous route path */}
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

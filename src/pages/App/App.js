import React, { useState,useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import PostPage from '../PostPage/PostPage';
import NewBlogPost from '../NewBlogPost/NewBlogPost';
import About from '../About/About';
import PostDetailPage from '../../pages/PostDetailPage/PostDetailPage';
import Contact from '../Contact/Contact';
import NavBar from '../../components/NavBar/NavBar';
import * as postsAPI from '../../utilities/posts-api';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate(); 
  const uniquePost = posts.map((p) => p )

  async function addPost(post) {
    const newPost = await postsAPI.create(post);
    setPosts([...posts, newPost]);
  }
  
  async function deletePost(id) {
    const deletePost = await postsAPI.deletePost(id);
    const updatedPosts = posts.filter(post => post._id !== deletePost._id);
    setPosts(updatedPosts);
  }  

  async function updatePost(post) {
    const updatePost = await postsAPI.updatedPost(post);
    const updatedPosts = posts.map((p) => p._id === updatePost._id ? updatePost : p);
    setPosts(updatedPosts);
    navigate('/');
  }
  
  useEffect( function() {
    async function getAllPosts() {
      const posts = await postsAPI.getAll();
      setPosts(posts);
    }
    getAllPosts();
  },[]);

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/" element={<PostPage user={user} posts={posts}/>}/>
            <Route path="/posts/:id" element={<PostDetailPage uniquePost={uniquePost} deletePost={deletePost} updatePost={updatePost}  user={user}/>}/>
            {/* <Route path="/posts/:postId" element={<BlogListDetails  />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/new" element={<NewBlogPost addPost={addPost} user={user} setUser={setUser}/>} />
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

import React, { useState,useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import PostPage from '../PostPage/PostPage';
import BlogListDetails from '../../components/BlogListDetails/BlogListDetails';
import NewBlogPost from '../NewBlogPost/NewBlogPost';
import About from '../About/About';
import PostDetailPage from '../../pages/PostDetailPage/PostDetailPage';
import UpdatePostForm from '../../components/UpdatePostForm/UpdatePostForm';
import Contact from '../Contact/Contact';
import NavBar from '../../components/NavBar/NavBar';
import * as itemsAPI from '../../utilities/items-api';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate(); 
  const uniquePost = posts.map((p, i) => p )
  

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
  },[]);

  async function deletePost(id) {
    console.log("deletePost",id);
    const deleteItem = await itemsAPI.deletePost(id);
    const updatedPosts = posts.filter(post => post._id !== deleteItem._id);
    setPosts(updatedPosts);
    navigate('/');
  }  

  //update the array 
  async function updatePost(post) {
    // console.log("postMalone", post);
    const updateItem = await itemsAPI.updatedPost(post);
    const updatedPosts = posts.map((p) => p._id === updateItem._id ? updateItem : p);
    console.log("updateItem", updateItem);
    console.log("update", updatedPosts);
    setPosts(updatedPosts);
    navigate('/');
  }


  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/" element={<PostPage user={user} setUser={setUser} posts={posts}/>}/>
            <Route path="/items/:id" element={<PostDetailPage uniquePost={uniquePost} deletePost={deletePost} updatePost={updatePost}  setPosts={setPosts}/>}/>
            <Route path="/posts/:postId" element={<BlogListDetails  />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/new" element={<NewBlogPost addPost={addPost}/>} />
            {/* <Route path="/edit/" element={<UpdatePostForm updatePost={updatePost} posts={posts} setPosts={setPosts} />} /> */}
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

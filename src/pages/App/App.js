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
import UpdatePostForm from '../../components/UpdatePostForm/UpdatePostForm';
import Contact from '../Contact/Contact';
import NavBar from '../../components/NavBar/NavBar';
import * as itemsAPI from '../../utilities/items-api';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPosts] = useState([]);
  const uniquePost = posts.map((p, i) => p )
  // console.log("Unique", posts);

  async function addPost(post) {
    const newItem = await itemsAPI.create(post);
    setPosts([...posts, newItem]);
  }
  
  
  useEffect( function() {
    async function getAllPosts() {
      const items = await itemsAPI.getAll();
      // console.log("hello:", items);
      setPosts(items);
    }
    getAllPosts();
  },[posts]);

  async function deletePost(post) {
    const deleteItem = await itemsAPI.deletePost(post);
    const updatedPosts = posts.filter(post => post._id !== deleteItem._id)
    setPosts(updatedPosts);
  }
  
  
  //   useEffect( function(){ 
  // deletePost();
// }, [posts]);
 
   
  //update the array 
  async function updatePost(post) {
    const updateItem = await itemsAPI.updatedPost(post);
    console.log("Hello",updateItem);
    const updatedPosts = posts.map((p,i) => p._id === updateItem._id ? updateItem : p);
    console.log("update", updateItem);
    setPosts(updatedPosts);
  }


  // .filter() methconod to filter the post you clicked on to delete (maybe evt.target.name === e)
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
            <Route path="/items/:id" element={<PostDetailPage uniquePost={uniquePost} deletePost={deletePost} updatePost={updatePost}  setPosts={setPosts}/>}/>
            <Route path="/posts/:postId" element={<BlogListDetails  />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/new" element={<NewBlogPost addPost={addPost}/>} />
            <Route path="/new/:id" element={<UpdatePostForm updatePost={updatePost} uniquePost={uniquePost} setPosts={setPosts} />} />
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

import React from 'react';
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";


// We have to send the (post) state through here in UpdatePostForm


export default function UpdatePostForm({posts, setPosts, updatePost, post}) {
    const[formData, setFormData] = useState({ name: "", desc: "" });
   console.log("postm",posts);
    //  console.log(setFormData);
    function handleChange(evt){
        const newFormData = {[evt.target.name]: evt.target.value};
        setFormData(newFormData);
        console.log(newFormData);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        //  setPosts(...posts, {[evt.target.name]: evt.target.value});
       updatePost(formData);
       console.log(formData);
        setFormData({ name: "", desc: ""});
    }
    
  
   


    return(
        <form onSubmit={handleSubmit}>
          <label> Post Name </label>
          <input 
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <label> Description </label>
          <input 
            name="desc"
            value={formData.desc}
            onChange={handleChange}
          />


          <button
           type="submit"
           > UPDATE POST</button>
        </form>
    );
}
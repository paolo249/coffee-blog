import React from 'react';
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";

export default function UpdatePostForm({uniquePost, setPosts, updatePost}) {
    const[formData, setFormData] = useState({ name: "", desc: "" });

    function handleChange(evt){
        const newFormData = {...formData, [evt.target.name]: evt.target.value};
        setFormData(newFormData);
        console.log(newFormData);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
       updatePost(formData);
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
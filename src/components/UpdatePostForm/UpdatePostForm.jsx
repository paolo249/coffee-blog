import React from 'react';
import {useState} from "react";
import "./UpdatePostForm.css";




export default function UpdatePostForm({updatePost,post,user}) {
const[formData, setFormData]=useState(post);

  function handleChange(evt){
    const newFormData={...formData,[evt.target.name]: evt.target.value};
    setFormData(newFormData);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    updatePost(formData);
    setFormData({ name: "", desc: "", user: user});
  }


    return(
       <div>
         <h1 id= "updatePst"> Update Post </h1>
         <link href="https://fonts.googleapis.com/css?family=Josefin+Slab:400,600,700" rel="stylesheet"></link>
        <form onSubmit={handleSubmit}>
          <label> Post Name </label>
          <input 
            name="name"
            id = "update-postName"
            value={formData.name}
            onChange={handleChange}
          />

          <label> Description </label>
          <input 
            name="desc"
            id = "update-description"
            value={formData.desc}
            onChange={handleChange}
          />


          <button
           type="submit" id = "update-btn"
           > UPDATE POST</button>
        </form>
        </div>
    );
}
import React from 'react';
import {useState} from "react";




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
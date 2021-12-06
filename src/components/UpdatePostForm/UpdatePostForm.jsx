import React from 'react';
import {useState} from "react";


// We have to send the (post) state through here in UpdatePostForm


export default function UpdatePostForm({posts, updatePost, post}) {
    const[formData, setFormData] = useState(post);
   console.log("postm",posts);
    //  console.log("formData", formData);
    function handleChange(evt){
        const newFormData = {...formData,[evt.target.name]: evt.target.value};
        setFormData(newFormData);
        console.log("newFormData" , newFormData);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        //  setPosts(...posts, {[evt.target.name]: evt.target.value});
        console.log("formData", formData);
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
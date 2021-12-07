import React from 'react';
import {useState} from "react";
import {useNavigate} from 'react-router-dom';



export default function UpdatePostForm({posts, updatePost, post, user}) {
    const[formData, setFormData] = useState(post);
    const navigate = useNavigate(); 
  //  console.log("postm",posts);
    function handleChange(evt){
        const newFormData = {...formData,[evt.target.name]: evt.target.value};
        setFormData(newFormData);
        // console.log("newFormData" , newFormData);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        // console.log("formData", formData);
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
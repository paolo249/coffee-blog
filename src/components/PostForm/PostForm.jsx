import React from 'react';

import {useState, useEffect} from "react";
import {useNavigate, Link } from "react-router-dom";
import "./PostForm.css"

export default function PostForm({addPost, user}) {
    const[formData, setFormData] = useState({ name: "", desc: "" , user: user});
    const navigate = useNavigate();
    function handleChange(evt){
        const newFormData = {...formData, [evt.target.name]: evt.target.value};
        setFormData(newFormData);
        console.log(newFormData);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        addPost(formData);
        setFormData({ name: "", desc: "", user: user});
        navigate('/');
    }
    
   


    return(
        <form onSubmit={handleSubmit}>
          <label> Post Name </label>
          <input 
            id = "postName"
            name="name"
            value={formData.name}
            onChange={handleChange}
            maxLength="800"
          />

          <label> Description </label>
          <textarea 
            id = "description"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            maxLength="8000"
          />


          <button type="submit"> ADD POST</button>
        </form>
    );
}
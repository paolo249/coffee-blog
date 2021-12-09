import React from 'react';
import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar(props) {

  function handleLogOut() {
    usersService.logOut();
    props.setUser(null);
  }

  return (
    <nav id ="title-nav">
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Gurajada&family=Poller+One&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Dancing+Script&family=Gurajada&display=swap" rel="stylesheet"></link>
      <Link to="/" id="one">Home</Link>
      &nbsp;  &nbsp; &nbsp;
      {/* <Link to="/about" id="one">About</Link> */}
       
      {/* <Link to="/contact" id="one">Contact</Link> */}
      &nbsp;  &nbsp; &nbsp; 
      <Link to="/new" id="one">New Post</Link>
      &nbsp;  &nbsp; &nbsp; &nbsp; 
      <Link to="" onClick={handleLogOut} id="one">Log Out</Link>
      &nbsp; &nbsp; &nbsp; &nbsp; 
      <span id = "welcome" > |  Welcome, {props.user.name} | </span>
    </nav>
    
  );
}
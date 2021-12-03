import React from 'react';
import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';

export default function NavBar(props) {

  function handleLogOut() {
    usersService.logOut();
    props.setUser(null);
  }

  return (
    <nav>
      <Link to="/">Post Page</Link>
      &nbsp; | &nbsp;
      <Link to="/about">About</Link>
      &nbsp; | &nbsp;
      <Link to="/contact">Contact</Link>
      &nbsp; | &nbsp;
      <Link to="/new">New Post</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {props.user.name} </span>
    </nav>
  );
}
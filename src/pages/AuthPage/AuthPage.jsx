import React, { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import "./AuthPage.css";
import { Link } from "react-router-dom";



export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>

      <h1 id="title">COFFEE EXPRESS</h1>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lexend+Zetta&family=Poller+One&display=swap" rel="stylesheet"></link>
      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
      { showSignUp ?
        <SignUpForm setUser={setUser} />
        : 
        <LoginForm setUser={setUser} />
      }
    </main>
  );
}
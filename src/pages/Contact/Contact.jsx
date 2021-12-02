import React from 'react';
import { checkToken } from '../../utilities/users-service';

export default function Contact() {

  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }

  return (
    <>
      <h1>Contact</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}
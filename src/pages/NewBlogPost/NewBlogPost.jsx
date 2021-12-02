import React from 'react';
import { checkToken } from '../../utilities/users-service';

export default function NewBlogPost() {

  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }

  return (
    <>
      <h1>New Blog Post</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}
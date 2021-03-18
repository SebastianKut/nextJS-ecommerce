import React, { useState } from 'react';
import { useGlobalContext } from '../context/AuthContext';
import Head from 'next/head';

function login() {
  const [email, setEmail] = useState('');

  const { loginUser } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email);
  };

  return (
    <div>
      <Head>
        <title>Login page</title>
        <meta
          name="description"
          content=" The login page, login to your account"
        />
      </Head>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          placeholder="Enter user name"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input type="submit" value="Log In"></input>
      </form>
    </div>
  );
}

export default login;

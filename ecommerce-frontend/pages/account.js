import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useGlobalContext } from '../context/AuthContext';

function account() {
  const { user, logoutUser } = useGlobalContext();

  if (!user)
    return (
      <div>
        <h2>Please Log in</h2>
        <Link href="/">
          <a>Go back</a>
        </Link>
      </div>
    );

  return (
    <div>
      <Head>
        <title>Account page</title>
        <meta
          name="description"
          content=" The account page, view your orders"
        />
      </Head>
      <h2>Account page</h2>
      <p>You are logged in as {user.email}</p>
      <a href="#" onClick={logoutUser}>
        Logout
      </a>
    </div>
  );
}

export default account;

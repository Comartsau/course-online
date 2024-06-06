'use client'
import { useEffect } from 'react';

export default function Home() {
  const setAdminToken = () => {
    document.cookie = 'token=admin; path=/'; // Set token as 'admin' for admin role
    console.log('Admin Token Set:', document.cookie);
  };

  const setUserToken = () => {
    document.cookie = 'token=user; path=/'; // Set token as 'user' for user role
    console.log('User Token Set:', document.cookie);
  };

  return (
    <div className="">
      <h1>Home Page</h1>
      <div>
        <button onClick={setAdminToken}>Set Admin Token</button>
      </div>
      <div>
        <button onClick={setUserToken}>Set User Token</button>
      </div>
    </div>
  );
}

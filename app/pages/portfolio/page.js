'use client'
import { useEffect } from 'react';

function Portfolio() {
    useEffect(() => {
        document.cookie = "token=user"; // Change to 'user' for user role
      }, []);

  return (
    <div>Portfolio</div>
  )
}

export default Portfolio
'use client'
import { useEffect } from "react";

function EBook() {

    useEffect(() => {
        document.cookie = "token=admin"; // Change to 'user' for user role
      }, []);

  return (
    <div>EBook</div>
  )
}

export default EBook
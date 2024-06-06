'use client'
import { useEffect } from "react";

function Events() {
    useEffect(() => {
        document.cookie = "token=user"; // Change to 'user' for user role
      }, []);

  return (
    <div>Events</div>
  )
}

export default Events
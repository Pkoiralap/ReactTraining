import React from 'react';
import { Link } from "react-router-dom";

export default function(props) {
  return (
    <div>
      <h1>
        Hi I am the contacts page
      </h1>
      <Link to="/about"> About </Link>
    </div>
  )
}
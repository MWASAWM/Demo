import React from "react"
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <NavLink to="/"><button>Home</button></NavLink>
      <button><NavLink to="/about">About</NavLink></button>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
};

export default Navigation
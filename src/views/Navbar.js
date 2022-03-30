import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      {' '}
      <NavLink to="/new">Admin</NavLink>
      <br></br>
      <NavLink to="/">Home</NavLink>
      <br></br>
      <NavLink to="/signin">SignIn</NavLink>
      <br></br>
    </div>
  );
}

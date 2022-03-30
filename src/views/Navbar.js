import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../services/users';

export default function Navbar({ currentUser }) {
  const handleLogout = async () => {
    await logout();
  };

  return (
    <div>
      {' '}
      <NavLink to="/new">Admin</NavLink>
      <br></br>
      <NavLink to="/">Home</NavLink>
      <br></br>
      {currentUser ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <NavLink to="/signin">SignIn</NavLink>
      )}
      <br></br>
    </div>
  );
}

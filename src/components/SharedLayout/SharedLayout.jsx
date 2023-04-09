import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

function SharedLayout() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </div>
      <Outlet />
    </>
  );
}

export default SharedLayout;

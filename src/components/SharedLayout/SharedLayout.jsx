import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

function SharedLayout() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default SharedLayout;

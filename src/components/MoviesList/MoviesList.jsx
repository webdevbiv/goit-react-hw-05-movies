import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function MoviesList({ data }) {
  const location = useLocation();
  console.log(location);
  return (
    <ul>
      {data.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <span>{title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MoviesList;

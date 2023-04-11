import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'services/API';

function MovieDetails() {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getMovieById(movieId).then(res => {
      setDetails(res.data);
      console.log(res.data);
    });
  }, [movieId]);

  return (
    <>
      {details && <MovieDetailsCard details={details} />}
      <ul>
        <li>
          <Link to="Cast">Cast</Link>
        </li>
        <li>
          <Link to="Reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default MovieDetails;

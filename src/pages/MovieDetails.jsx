import GoBackButton from 'components/GoBackButton/GoBackButton';
import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/API';

function MovieDetails() {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getMovieById(movieId).then(res => {
      setDetails(res.data);
    });
  }, [movieId]);

  if (!details) {
    return null;
  }

  return (
    <>
      {details && (
        <>
          {' '}
          <GoBackButton to={backLinkHref.current} />
          <MovieDetailsCard details={details} />
          <div>Additional information</div>
          <ul>
            <li>
              <Link to="Cast">Cast</Link>
            </li>
            <li>
              <Link to="Reviews">Reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
}

export default MovieDetails;

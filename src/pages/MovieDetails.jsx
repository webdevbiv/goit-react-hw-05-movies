import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

  return <>{details && <MovieDetailsCard details={details} />}</>;
}

export default MovieDetails;

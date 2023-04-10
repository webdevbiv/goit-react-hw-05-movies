import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'services/API';

function MovieDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  useEffect(() => {
    if (!id) return;
    getMovieById(id).then(res => {
      setDetails(res.data);
      console.log(details);
    });
  }, [id]);

  return (
    <>
      <MovieDetailsCard />
    </>
  );
}

export default MovieDetails;

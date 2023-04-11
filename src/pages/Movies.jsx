import MoviesList from 'components/MoviesList/MoviesList';
import SearchMoviesBar from 'components/SearchMoviesBar/SearchMoviesBar';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovie } from 'services/API';

function Movies() {
  const [result, setResult] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.length !== 0) {
      getMovie(searchParams).then(res => {
        setResult(res.data.results);
        // console.log(res.data.results);
      });
    }
  }, [searchParams]);

  const handleSubmit = data => {
    return setSearchParams(data);
  };

  return (
    <main>
      <SearchMoviesBar onSubmit={handleSubmit} />
      {result && <MoviesList data={result} />}
    </main>
  );
}

export default Movies;

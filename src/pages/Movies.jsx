import MoviesList from 'components/MoviesList/MoviesList';
import SearchMoviesBar from 'components/SearchMoviesBar/SearchMoviesBar';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovie } from 'services/API';

function Movies() {
  const [result, setResult] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query === '' || !query) return;

    getMovie(query).then(res => {
      setResult(res.data.results);
    });
  }, [query]);

  const handleSubmit = data => {
    return setSearchParams({ query: data });
  };

  return (
    <main>
      <SearchMoviesBar onSubmit={handleSubmit} />
      {result && <MoviesList data={result} />}
    </main>
  );
}

export default Movies;

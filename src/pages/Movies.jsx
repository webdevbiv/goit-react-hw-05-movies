import MoviesList from 'components/MoviesList/MoviesList';
import SearchMoviesBar from 'components/SearchMoviesBar/SearchMoviesBar';
import React, { useEffect, useState } from 'react';
import { getMovie } from 'services/API';

function Movies() {
  const [submit, setSubmit] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (submit.length !== 0) {
      getMovie(submit).then(res => {
        setResult(res.data.results);
        // console.log(res.data.results);
      });
    }
  }, [submit]);

  const handleSubmit = data => {
    return setSubmit(data);
  };

  return (
    <main>
      <SearchMoviesBar onSubmit={handleSubmit} />
      {result && <MoviesList data={result} />}
    </main>
  );
}

export default Movies;

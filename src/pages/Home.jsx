import MoviesList from 'components/MoviesList/MoviesList';
import React, { useEffect, useState } from 'react';
import { getTrending } from 'services/API';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    getTrending().then(res => {
      setTrendingMovies(res.data.results);
    });
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {trendingMovies && <MoviesList data={trendingMovies} />}
    </main>
  );
}

export default Home;

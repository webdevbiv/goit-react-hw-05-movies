import TrandingList from 'components/TrandingList/TrandingList';
import React, { useEffect, useState } from 'react';
import { getTranding } from 'services/API';

function Home() {
  const [trandingMovies, setTrandingMovies] = useState([]);
  useEffect(() => {
    getTranding().then(data => setTrandingMovies(data.results));

    // return () => {
    //   second;
    // };
  }, []);

  return (
    <main>
      <TrandingList data={trandingMovies} />
    </main>
  );
}

export default Home;

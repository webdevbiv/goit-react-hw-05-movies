import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Home from 'pages/Home';
import SharedLayout from 'components/SharedLayout/SharedLayout';

// import MovieDetails from 'pages/MovieDetails';
// import Movies from 'pages/Movies';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';

const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Movies = lazy(() => import('pages/Movies'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </>
  );
};

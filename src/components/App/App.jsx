import MovieDetails from 'pages/MovieDetails';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </>
  );
};

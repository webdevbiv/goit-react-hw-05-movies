import axios from 'axios';

const AUTH_TOKEN = 'api_key=d8cb8b6f5e99c996ad5ccfb4a147e0bb';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

export const getTrending = async () => {
  const data = await axios.get(`/trending/movie/day?${AUTH_TOKEN}`);
  return data;
};

export const getMovie = async submit => {
  const data = await axios.get(`/search/movie?${AUTH_TOKEN}&query=${submit}`);
  return data;
};

export const getMovieById = async id => {
  const data = await axios.get(`/movie/${id}?${AUTH_TOKEN}&language=en-US`);
  return data;
};

export const getCast = async id => {
  const data = await axios.get(
    `/movie/${id}/credits?${AUTH_TOKEN}&language=en-US`
  );
  return data;
};

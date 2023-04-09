import axios from 'axios';

const AUTH_TOKEN = 'd8cb8b6f5e99c996ad5ccfb4a147e0bb';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTranding = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${AUTH_TOKEN}`
  );
  console.log(data);
  return data;
};

import axios from 'axios';

const AUTH_TOKEN = 'd8cb8b6f5e99c996ad5ccfb4a147e0bb';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

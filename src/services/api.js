import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.omdbapi.com/?apikey=c047d840&s=spider%20man',
});

export default api;

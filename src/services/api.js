import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/ambegossi/hdn-api',
});

export default api;

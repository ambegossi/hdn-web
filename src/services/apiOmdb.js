import axios from 'axios';

function getProjects(path) {
  return axios.get(`https://www.omdbapi.com/${path}`);
}

export default getProjects;

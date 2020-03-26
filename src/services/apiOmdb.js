import axios from 'axios';

function getProjects(path) {
  return axios.get(`http://www.omdbapi.com/${path}`);
}

export default getProjects;

import axios from 'axios';

const api = axios.create({
  // Use localhost for Development mode and startup the be-the-hero-backend project
  // baseURL: 'http://localhost:3333',
  baseURL: 'https://be-the-hero-backend.herokuapp.com/'
});

export default api;
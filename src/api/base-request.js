import axios from 'axios';

const baseRequest = axios.create({
  baseURL: process.env.API_URL,
});

export default baseRequest;

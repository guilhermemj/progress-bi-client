import axios from 'axios';

const baseRequest = axios.create({
  baseURL: process.env.SERVER_URL,
});

export default baseRequest;

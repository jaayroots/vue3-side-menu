import axios from 'axios';
export const HTTP = axios.create({
  baseURL: 'http://localhost:3000/',
  proxyHeaders: false,
  credentials: false,
  headers: { "Access-Control-Allow-Origin": "*" },
});
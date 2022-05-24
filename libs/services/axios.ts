import axios from 'axios';

export const vagalumeAPI = axios.create({
  baseURL: `https://api.vagalume.com.br/`
});
import { BASE_URL, API_KEY, SUB_BASE_URL, SUB_API_KEY } from './../config/index.template';
import Axios from 'axios';

export const axios = Axios.create({
  baseURL: BASE_URL,
  headers: {
    APIKEY: API_KEY,
    post: { 'Content-Type': 'application/json' },
    put: { 'Content-Type': 'application/json' },
    delete: { 'Content-Type': 'application/json' },
  },
});

export const subAxios = Axios.create({
  baseURL: SUB_BASE_URL,
  headers: {
    APIKEY: SUB_API_KEY,
    post: { 'Content-Type': 'application/json' },
    put: { 'Content-Type': 'application/json' },
    delete: { 'Content-Type': 'application/json' },
  },
});

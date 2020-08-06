import Axios from 'axios';
import config from 'config';

export const axios = Axios.create({
  ...config.axios.base,
});

export const otherAxios = Axios.create({
  ...config.axios.other,
});

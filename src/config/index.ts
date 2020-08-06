import { Dimensions } from 'react-native';

export default {
  isDevMode: __DEV__,
  device: {
    ...Dimensions.get('screen'),
  },
  playStoreId: '',
  appStoreId: '',
  axios: {
    base: {
      baseURL: '',
      headers: {
        APIKEY: '',
        Authorization: 'BEARER',
        post: {
          'Content-Type': 'application/json',
        },
      },
    },
    other: {
      baseURL: '',
      headers: {
        APIKEY: '',
        Authorization: 'BEARER',
        post: {
          'Content-Type': 'application/json',
        },
      },
    },
  },
};

import axios from 'axios';
import handStatusError from './handStatusError.js';

const Domain = (domain) => {
  if (process.env.NODE_ENV === 'development') {
    switch (location.hostname) {
      // case 'localhost':
      //   return '/';
      default:
        return domain;
    }
  }
  return domain;
};

const weatherRequest = axios.create({
  baseURL: Domain('https://opendata.cwb.gov.tw/'),
});

// http request 攔截器
weatherRequest.interceptors.request.use(
  async (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// http response 攔截器
weatherRequest.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    handStatusError(error.response);
    return Promise.reject(error.response.data);
  }
);

export const getWeatherData = () =>
  weatherRequest.get('/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-A2BD7185-0027-4095-8CC7-8771440B2E8B');


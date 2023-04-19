import axios from 'axios';

// Set the baseURL for your API
axios.defaults.baseURL = 'http://localhost:8000';

// Define a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before sending the request
    // config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  },
  function (error) {
    console.log(error)
    return Promise.reject(error);
  }
);

// Define a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Do something with the response data
    return response;
  },
  function (error) {
    // Do something with the response error
    console.log(error)
    return Promise.reject(error);
  }
);



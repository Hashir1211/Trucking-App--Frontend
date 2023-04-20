import axios from 'axios';

// Set the baseURL for your API
axios.defaults.baseURL = 'http://localhost:8000';

const authRoute= ['/posts']
// Define a request interceptor
axios.interceptors.request.use(
  function (config) {
    if (!authRoute.includes(config.url))
    return config;
    // Do something before sending the request
  
    // config.headers.Authorization = `{localStorage.getItem('token')}`;
    const data= JSON.parse(localStorage.getItem('data'));
    config.headers.Authorization = data.accessToken;
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



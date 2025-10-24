import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGRmOGEyNzA3MzU0ODI5NGNjNDRiMTU1ZWE1NWIxZiIsIm5iZiI6MTc2MTI2Mjc3OC4yOTQwMDAxLCJzdWIiOiI2OGZhYmNiYTNjMWE5ZDczMDcxMjg0ZjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.gs3IxautsD76oj3iqe61RFwubo9ydYrx2_QlElXun4o',
  },
});

export default api;

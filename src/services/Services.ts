import axios, { AxiosError, AxiosResponse } from 'axios';
import to from 'await-to-js';

// export const getLocations = async () => {
//   const [err, response] = await to<AxiosResponse, AxiosError>(axios.get('https://dummyapi.io/data/api/user?page=1&limit=10'));
//   console.log('6 err >>> ', err);
//   if (err || !response) {
//     return;
//   }

//   console.log('10 response >>> ', response);
//   return response.data;
// };

export const getUsers = async () => {
  const [err, response] = await to<AxiosResponse, AxiosError>(axios.get(
    'https://dummyapi.io/data/api/user?page=1&limit=10',
    { headers: { 'app-id': '0JyYiOQXQQr5H9OEn21312', } }
  ));

  if (err || !response) {
    return;
  }

  return response.data;
};
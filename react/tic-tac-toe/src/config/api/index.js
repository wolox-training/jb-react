import { create } from 'apisauce';

const headers = {
  token: window.localStorage.getItem('token')
};
const api = create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: { ...headers }
});

export default api;

import api from '~config/api';

export default {
  postLogin: data => api.post('/login', data)
};

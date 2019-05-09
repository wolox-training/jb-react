import api from '~config/api';
import { wrapService } from 'redux-recompose';

const service = {
  postLogin: data => api.post('/login', data)
};

export default service;

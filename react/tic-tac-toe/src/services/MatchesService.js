import api from '~config/api';
import wrapService from 'redux-recompose/lib/invisible/wrapService';

const service = {
  getMatches: () => api.get('/matches')
};

export default service;

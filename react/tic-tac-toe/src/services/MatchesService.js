import api from '~config/api';

const service = {
  getMatches: () => api.get('/matches')
};

export default service;

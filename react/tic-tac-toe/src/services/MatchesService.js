import api from '~config/api';
import { wrapService } from 'redux-recompose';

const getMatches = () => api.get('/matches');

const services = {
  getMatches
};

export default wrapService(services, 'matches', { getMatches: 'matches' });

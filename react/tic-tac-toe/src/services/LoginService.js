import api from '~config/api';
import { wrapService, withPostSuccess } from 'redux-recompose';
import { push } from 'connected-react-router';

const postLogin = data => api.post('/login', data);

postLogin.injections = [
  withPostSuccess((dispatch, response) => {
    window.localStorage.setItem('token', response.data.token);
    api.setHeader('token', response.data.token);
    dispatch(push('/game'));
  })
];

const services = {
  postLogin
};

export default wrapService(services, 'login', { postLogin: 'token' });

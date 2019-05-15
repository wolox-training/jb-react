import { createTypes } from 'redux-recompose';
import api from '~config/api';
import { push } from 'connected-react-router';

export const actions = createTypes(['LOGOUT'], '@@LOGIN');

const actionsCreators = {
  logout: () => dispatch => {
    window.localStorage.removeItem('token');
    api.setHeaders({
      token: null
    });
    dispatch(push('/login'));
    return {
      target: 'loginData',
      type: actions.type,
      payload: null
    };
  }
};

export default actionsCreators;

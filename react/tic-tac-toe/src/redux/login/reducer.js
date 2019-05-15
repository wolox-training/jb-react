import { createReducer } from 'redux-recompose';
import { actions } from './actions';
import api from '~config/api';

const defaultState = {};

function onLogout() {
  return state => {
    window.localStorage.removeItem('token');
    api.setHeaders({
      token: null
    });
    return {
      ...state,
      loginData: null
    };
  };
}

const reducerDescription = {
  [actions.LOGOUT]: onLogout()
};

export default createReducer(defaultState, reducerDescription);

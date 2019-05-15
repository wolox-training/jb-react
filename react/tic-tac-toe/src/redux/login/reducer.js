import { createReducer, completeState } from 'redux-recompose';
import { actions } from './actions';
import api from '~config/api';

const stateDescription = {
  token: null
};

const defaultState = completeState(stateDescription);

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

const reducer = {
  [actions.LOGOUT]: onLogout()
};

export default createReducer(defaultState, reducer);

import login from '~services/LoginService';
import { push } from 'connected-react-router';
import api from '~config/api';
import { completeTypes, createTypes, createExternalActions } from 'redux-recompose';

export const actions = createTypes(completeTypes(['LOGIN']), '@@LOGIN');
const $ = createExternalActions('login');

const actionCreators = {
  login: data => async dispatch => {
    dispatch({ type: $.LOGIN });
    const response = await login.postLogin(data);
    if (response.ok) {
      dispatch({
        type: $.LOGIN_SUCCESS,
        target: 'matches',
        payload: response.data.token
      });
      window.localStorage.setItem('token', response.data.token);
      api.setHeader('token', response.data.token);
      dispatch(push('/game'));
    } else {
      dispatch({
        type: $.LOGIN_FAIL,
        target: 'matches',
        payload: response.problem
      });
    }
  }
};

export default actionCreators;

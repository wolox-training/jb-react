import login from '~services/LoginService';
import { push } from 'connected-react-router';
import api from '~config/api';
import { completeTypes, createTypes, createExternalActions } from 'redux-recompose';

export const actions = createTypes(completeTypes(['LOGIN']), '@@LOGIN');
const $ = createExternalActions('login');

const actionCreators = {
  login: data => async dispatch => {
    dispatch({ type: actions.LOGIN });
    const response = await login.postLogin(data);
    if (response.ok) {
      dispatch({
        type: actions.LOGIN_SUCCESS
      });
      window.localStorage.setItem('token', response.data.token);
      api.setHeader('token', response.data.token);
      dispatch(push('/game'));
    } else {
      dispatch({ type: actions.LOGIN_FAIL });
    }
  }
};

export default actionCreators;

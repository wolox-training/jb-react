import login from '~services/LoginService';
import { push } from 'connected-react-router';
import api from '~config/api';
import { createExternalActions } from 'redux-recompose';

const $ = createExternalActions('login');

const actionCreators = {
  login: data => async dispatch => {
    dispatch({
      type: $.LOADING,
      target: 'token'
    });
    const response = await login.postLogin(data);
    if (response.ok) {
      dispatch({
        type: $.SUCCESS,
        target: 'token',
        payload: response.data.token
      });
    } else {
      dispatch({
        type: $.FAILURE,
        target: 'token',
        payload: response.problem
      });
    }
  }
};

export default actionCreators;

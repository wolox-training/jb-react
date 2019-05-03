import login from '~services/LoginService';
import { push } from 'connected-react-router';

export const actions = {
  LOGIN: '@@LOGIN/LOGIN',
  LOGIN_SUCESS: '@@LOGIN/LOGIN_SUCESS',
  LOGIN_FAIL: '@@LOGIN/LOGIN_FAIL'
};

const actionCreators = {
  login: data => async dispatch => {
    dispatch({ type: actions.LOGIN });
    const response = await login.postLogin(data);
    if (response.ok) {
      dispatch({
        type: actions.LOGIN_SUCESS
      });
      window.localStorage.setItem('token', response.data.token);
      dispatch(push('/game'));
    } else {
      dispatch({ type: actions.LOGIN_FAIL });
    }
  }
};

export default actionCreators;

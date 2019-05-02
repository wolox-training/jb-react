import login from '~services/LoginService';

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
        type: actions.LOGIN_SUCESS,
        payload: response.data.token
      });
    } else {
      dispatch({ type: actions.LOGIN_FAIL });
    }
  }
};

export default actionCreators;

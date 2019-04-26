export const actions = {
  LOGIN: '@@LOGIN/LOGIN',
  LOGIN_SUCESS: '@@LOGIN/LOGIN_SUCESS',
  LOGIN_FAIL: '@@LOGIN/LOGIN_FAIL'
}

const actionCreators = {
  login: data => async dispatch => {
    dispatch(actions.LOGIN);
  }
}

export default actionCreators;
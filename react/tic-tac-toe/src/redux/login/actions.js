import { createTypes } from 'redux-recompose';

export const actions = createTypes(['LOGOUT'], '@@LOGIN');

const actionsCreators = {
  logout: () => ({
    type: actions.LOGOUT,
    target: 'loginData',
    payload: null
  })
};

export default actionsCreators;

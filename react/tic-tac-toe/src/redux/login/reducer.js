import { createReducer } from 'redux-recompose';

const defaultState = {
  token: null
};

const reducerDescription = {};

export default createReducer(defaultState, reducerDescription);

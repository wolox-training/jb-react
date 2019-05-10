import { createReducer, onSetValue } from 'redux-recompose';
import { actions } from './actions';

const defaultState = {};

const reducerDescription = {
  [actions.LOGOUT]: onSetValue()
};

export default createReducer(defaultState, reducerDescription);

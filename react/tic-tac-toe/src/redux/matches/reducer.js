import { createReducer, completeState } from 'redux-recompose';

const stateDescription = {
  matches: null
};

const defaultState = completeState(stateDescription);

const reducer = {};

export default createReducer(defaultState, reducer);

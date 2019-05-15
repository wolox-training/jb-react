import { createReducer, completeState } from 'redux-recompose';

const stateDescription = {
  matches: []
};

const defaultState = completeState(stateDescription);

const reducer = {};

export default createReducer(defaultState, reducer);

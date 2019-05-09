import { actions } from './actions';
import { completeState } from 'redux-recompose';

const initialStateDescription = {
  token: null
};

const initialState = completeState(initialStateDescription);

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;

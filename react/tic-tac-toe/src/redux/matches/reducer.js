import { actions } from './actions';
import { completeState } from 'redux-recompose';

const initialStateDescription = {
  matchesHistory: []
};

const initialState = completeState(initialStateDescription);

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_MATCHES:
      return {
        ...state,
        matchesHistoryLoading: true
      };
    case actions.GET_MATCHES_SUCCESS:
      return {
        ...state,
        matchesHistory: action.payload,
        matchesHistoryLoading: false
      };
    case actions.GET_MATCHES_FAIL:
      return {
        ...state,
        matchesHistoryLoading: false,
        matchesHistoryError: true
      };
    default:
      return state;
  }
}

export default reducer;

import { actions } from './actions';
import { completeState } from 'redux-recompose';

const initialStateDescription = {
  token: null
};

const initialState = completeState(initialStateDescription);

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        tokenLoading: true
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        tokenLoading: false,
        tokenError: false
      };
    case actions.LOGIN_FAIL:
      return {
        ...state,
        tokenLoading: false,
        tokenError: true
      };
    default:
      return state;
  }
}

export default reducer;

import { actions } from './actions';

const initialState = {
  isLoading: false,
  hasError: false,
  token: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        isLoading: true
      };
    case actions.LOGIN_SUCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        token: action.payload
      };
    case actions.LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        hasError: true
      };
    default:
      return state;
  }
}

export default reducer;

import { actions } from './actions';

const initialState = {
<<<<<<< HEAD
    hasError: false,
    isLoading: false,
    matchesHistory: []
=======
  hasError: false,
  isLoading: false,
  matchesHistory: []
>>>>>>> login-layout
};

function reducer(state = initialState, action) {
  switch(action.type){
    case actions.GET_MATCHES:
      return ({
        ...state,
<<<<<<< HEAD
        isLoading: true
      });
    case actions.GET_MATCHES_SUCCESS:
      return ({
        ...state,
=======
        hasError: action.payload ? false : true,
>>>>>>> login-layout
        matchesHistory: action.payload,
        isLoading: false
      });
    case actions.GET_MATCHES_FAIL:
      return({
        ...state,
        isLoading: false,
        hasError: true
      });
    default:
        return state;
  }
}

export default reducer;
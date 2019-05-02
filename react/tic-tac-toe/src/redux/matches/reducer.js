import { actions } from './actions';

const initialState = {
  hasError: false,
  isLoading: false,
  matchesHistory: []
};

function reducer(state = initialState, action) {
  switch(action.type){
    case actions.GET_MATCHES:
      return ({
        ...state,
        isLoading: true
      });
    case actions.GET_MATCHES_SUCCESS:
      return ({
        ...state,
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

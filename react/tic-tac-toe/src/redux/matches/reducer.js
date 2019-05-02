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
        hasError: action.payload ? false : true,
        matchesHistory: action.payload,
        isLoading: false
      });
    case actions.TOGGLE_LOADING:
      return ({
        ...state,
        isLoading: !state.isLoading
      })
    default:
      return state;
  }
}

export default reducer;

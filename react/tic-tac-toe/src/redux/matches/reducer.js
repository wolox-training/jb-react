import { actions } from './actions';

const initialState = {
  isLoading: false,
  matchesHistory: []
};

function reducer(state = initialState, action) {
  switch(action.type){
    case actions.GET_MATCHES:
      return ({
        ...state,
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
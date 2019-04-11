import { actions } from './actions';

const initialState = {
  books: [],
  originalData: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS: // TODO to implement the logic
      return {
        originalData: [...action.payload],
        books: [...action.payload]
      };
    case actions.SEARCH_ITEM: // TODO to implement the logic
      return {
        ...state,
        books: state.originalData.filter(actual => actual.name.toLowerCase().includes(action.payload))
      };
    default:
      return state;
  }
}

export default reducer;

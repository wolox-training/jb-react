import { actions } from './actions';

const initialState = {
  books: [],
  bookSelected: [],
  originalData: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS: // TODO to implement the logic
      return {
        ...state,
        originalData: [...action.payload],
        books: [...action.payload]
      };
    case actions.ADD_TO_CART: // TODO to implement the logic
      return {
        ...state,
        bookSelected: state.bookSelected.concat(
          state.originalData.find(item => item.id === action.payload.id)
        )
      };
    case actions.ADD_ITEM: // TODO to implement the logic
      return {
        ...state
      };
    case actions.REMOVE_ITEM: // TODO to implement the logic
      return { ...state };
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

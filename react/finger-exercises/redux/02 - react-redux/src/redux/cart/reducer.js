import { actions } from './actions';

const initialState = {
  booksSelected: [],
  open: false
};

// i don't like the sintax of this func but is the only way that the linter don't bother
const incrementById = (arr, id) =>
  arr.map(elem => (elem.id === id ? { ...elem, quantity: elem.quantity + 1 } : elem));

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TO_CART:
      return {
        ...state,
        booksSelected: state.booksSelected.concat(action.payload)
      };
    case actions.ADD_ITEM:
      return {
        ...state,
        booksSelected: incrementById(state.booksSelected, action.payload)
      };
    case actions.REMOVE_ITEM:
      return {
        ...state,
        booksSelected: state.booksSelected.filter(actual => actual.id !== action.payload)
      };
    case actions.TOGGLE_CART:
      return {
        ...state,
        open: !state.open
      };
    default:
      return state;
  }
}

export default reducer;

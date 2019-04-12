import { actions } from './actions';

const initialState = {
  bookSelected: []
};

// i don't like the sintax of this func but is the only way that the linter don't bother
const incrementById = (arr, id) =>
  arr.map(elem => {
    if (elem.id === id) {
      const aux = { ...elem };
      aux.quantity += 1;
      return aux;
    }
    return elem;
  });

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TO_CART:
      return {
        bookSelected: state.bookSelected.concat(action.payload)
      };
    case actions.ADD_ITEM:
      return {
        bookSelected: incrementById(state.bookSelected, action.payload)
      };
    case actions.REMOVE_ITEM:
      return {
        bookSelected: state.bookSelected.filter(actual => actual.id !== action.payload)
      };
    default:
      return state;
  }
}

export default reducer;

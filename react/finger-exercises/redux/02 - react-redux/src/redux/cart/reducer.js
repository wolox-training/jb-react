import { actions } from './actions';

const initialState = {
  bookSelected: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TO_CART: // TODO to implement the logic
      return {
        ...state,
        bookSelected: state.bookSelected.concat(action.payload)
      };
    case actions.ADD_ITEM: // TODO to implement the logic
      return {
        ...state,
        bookSelected: state.bookSelected.map(elem => {
          if (elem.id === action.payload) {
            const aux = { ...elem };
            aux.quantity += 1;
            return aux;
          }
          return elem;
        })
      };
    case actions.REMOVE_ITEM: // TODO to implement the logic
      return {
        ...state,
        bookSelected: state.bookSelected.filter(actual => actual.id !== action.payload)
      };
    default:
      return state;
  }
}

export default reducer;

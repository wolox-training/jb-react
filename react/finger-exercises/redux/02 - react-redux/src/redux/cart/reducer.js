import { actions } from './actions';


function reducer(state = [], action) {
  switch (action.type) {
    case actions.ADD_TO_CART:
      return state.concat(action.payload);
    case actions.ADD_ITEM:
      return state.map(elem => {
        if (elem.id === action.payload) {
          const aux = { ...elem };
          aux.quantity += 1;
          return aux;
        }
        return elem;
      });
    case actions.REMOVE_ITEM: // TODO to implement the logic
      return state.filter(actual => actual.id !== action.payload);
    default:
      return state;
  }
}

export default reducer;

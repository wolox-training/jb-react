export const actions = {
  ADD_TO_CART: '@@CART/ADD_TO_CART',
  ADD_ITEM: '@@CART/ADD_ITEM',
  REMOVE_ITEM: '@@CART/REMOVE_ITEM',
  TOGGLE_CART: '@@CART/TOGGLE_CART'
};

const actionsCreators = {
  addToCart: item => ({
    type: actions.ADD_TO_CART,
    payload: item
  }),
  addItem: itemId => ({
    type: actions.ADD_ITEM,
    payload: itemId
  }),
  removeItem: itemId => ({
    type: actions.REMOVE_ITEM,
    payload: itemId
  }),
  toggleCart: () => ({
    type: actions.TOGGLE_CART
  })
};

export default actionsCreators;

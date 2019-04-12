export const actions = {
<<<<<<< HEAD
  ADD_TO_CART: '@@CART/ADD_TO_CART',
  ADD_ITEM: '@@CART/ADD_ITEM',
  REMOVE_ITEM: '@@CART/REMOVE_ITEM',
  TOGGLE_CART: '@@CART/TOGGLE_CART'
};

const actionsCreators = {
=======
  ADD_TO_CART: '@@BOOK/ADD_TO_CART',
  ADD_ITEM: '@@BOOK/ADD_ITEM',
  REMOVE_ITEM: '@@BOOK/REMOVE_ITEM'
};

const actionCreators = {
>>>>>>> fae577276093df7414f1c493e659f63f057bca21
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
<<<<<<< HEAD
  }),
  toggleCart: () => ({
    type: actions.TOGGLE_CART
  })
};

export default actionsCreators;
=======
  })
};

export default actionCreators;
>>>>>>> fae577276093df7414f1c493e659f63f057bca21

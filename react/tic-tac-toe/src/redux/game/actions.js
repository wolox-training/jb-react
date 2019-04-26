export const actions = {
  SQUARE_CLICK: '@@GAME/SQUARE_CLICK',
  HISTORY_CLICK: '@@GAME/HISTORY_CLICK'
};

const actionsCreators = {
  squareClick: squareId => ({
    type: actions.SQUARE_CLICK,
    payload: squareId
  }),
  historyClick: historyId => ({
    type: actions.HISTORY_CLICK,
    payload: historyId
  }) 
};

export default actionsCreators;
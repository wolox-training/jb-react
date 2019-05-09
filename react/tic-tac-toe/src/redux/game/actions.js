import { createTypes } from 'redux-recompose';

export const actions = createTypes(['SQUARE_CLICK', 'HISTORY_CLICK'], '@@GAME');

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

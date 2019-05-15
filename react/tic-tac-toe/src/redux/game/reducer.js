import { actions } from './actions';
import { calculateWinner } from '../../utils';
import { createReducer } from 'redux-recompose';

const initialState = {
  history: [{ squares: Array(9).fill(null) }],
  current: { squares: Array(9).fill(null) },
  stepNumber: 0,
  xIsNext: true
};

function onHistoryClick() {
  return (state, action) => ({
    ...state,
    stepNumber: action.payload,
    xIsNext: action.payload % 2 === 0,
    current: { ...state.history[action.payload] }
  });
}

function onSquareClick() {
  return (state, action) => {
    const history = state.history.slice(0, state.stepNumber + 1);
    const squares = state.current.squares.slice();
    if (calculateWinner(squares) || squares[action.payload]) {
      return state;
    }
    squares[action.payload] = state.xIsNext ? 'X' : 'O';
    return {
      ...state,
      history: history.concat([{ squares }]),
      stepNumber: history.length,
      xIsNext: !state.xIsNext,
      current: { squares }
    };
  };
}

const reducer = {
  [actions.SQUARE_CLICK]: onSquareClick(),
  [actions.HISTORY_CLICK]: onHistoryClick()
};

export default createReducer(initialState, reducer);

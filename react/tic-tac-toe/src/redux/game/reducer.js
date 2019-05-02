import { actions } from './actions'
import { calculateWinner } from '../../utils' 

const initialState = {
  history: [{ squares: Array(9).fill(null) }],
  current: { squares: Array(9).fill(null) },
  stepNumber: 0,
  xIsNext: true
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SQUARE_CLICK:
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
    case actions.HISTORY_CLICK:
      return {
        ...state,
        stepNumber: action.payload,
        xIsNext: action.payload % 2 === 0,
        current: { ...state.history[action.payload] }
      };
    default:
      return state;
  }
}

export default reducer;

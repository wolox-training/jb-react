import { actions } from './actions'
import { calculateWinner } from '../../utils' 

const initialState = {
  history: [{ squares: Array(9).fill(null)}],
  current: Array(9).fill(null),
  stepNumber: 0,
  xIsNext: true
};

function reducer(state = initialState, action){
    switch (action.type) {
      case actions.SQUARE_CLICK:
        const history = state.history.slice(0, state.stepNumber + 1);
        const current = history[history.length -1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[action.payload]) {
          return state;
        }
        squares[action.payload] = state.xIsNext ? 'X' : 'O';
        return { 
          history: history.concat([{squares}]),
          stepNumber: history.length,
          xIsNext: !state.xIsNext,
        }
      default:
        return state;
    }
}

export default reducer;
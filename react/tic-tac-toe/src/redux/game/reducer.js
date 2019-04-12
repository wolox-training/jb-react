import actions from './actions'

const initialState = {
  history: [{ squares: Array(9).fill(null)}],
  stepNumber: 0,
  xIsNext: true
};

calculateWinner = squares => {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && 
    squares[a] === squares[b] && 
    squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


function reducer(state = initialState, action){
    switch(action){
      case actions.squareClick:
        const history = state.history.slice(0, state.stepNumber + 1);
        const current = history[history.length -1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
          return state;
        }
        squares[i] = state.xIsNext ? 'X' : 'O';
        return { 
          history: history.concat([{squares}]),
          stepNumber: history.length,
          xIsNext: !prevState.xIsNext 
          }
      default:
        return state;
    }
}

export default reducer;
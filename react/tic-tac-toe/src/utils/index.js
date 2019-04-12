import { lines } from '../constants';

export const calculateWinner = squares => {
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

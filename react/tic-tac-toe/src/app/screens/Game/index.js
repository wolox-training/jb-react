
import React, {Component} from 'react';

import styles from './styles.module.scss';
import Board from './components/Board';
import {lines} from './constants';

class Game extends Component {
  state = {
    history: [{ squares: Array(9).fill(null)}],
    stepNumber: 0,
    xIsNext: true
  }

  handleClick = i => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length -1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState( prevState => ({ 
      history: history.concat([{squares}]),
      stepNumber: history.length,
      xIsNext: !prevState.xIsNext 
      })
    );
  }

  jumpTo = step => {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  calculateWinner = (squares) => {
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

  render(){
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);

    const moves = history.map((step,move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
        return (
          <li key={move}>
            <button onClick={()=> this.jumpTo(move)}>{desc}</button>
          </li>
        );
    }
    );

    let status;
    if(winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    
    return (
      <div className={styles.game}>
        <Board
          squares={current.squares}
          onClick={this.handleClick} 
        />
        <div className={styles.gameInfo}>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;

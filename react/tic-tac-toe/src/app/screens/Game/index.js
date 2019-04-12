
import React, {Component} from 'react';
import { connect } from 'react-redux';

import styles from './styles.module.scss';
import Board from './components/Board';
import { calculateWinner } from '../../../utils';
import gameActionsCreator from '../../../redux/game/actions';

class Game extends Component {

  jumpTo = step => {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render(){
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);

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
      status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
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

const mapStateToProps = state => ({
  history: state.history,
  stepNumber: state.stepNumber,
  xIsNext: state.xIsNext
});
const mapDispatchToProps = dispatch => ({
  handleSquareClick(squareId) {
    dispatch(gameActionsCreator.squareClick(squareId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);


import React, {Component} from 'react';
import { connect } from 'react-redux';

import styles from './styles.module.scss';
import Board from './components/Board';
import { calculateWinner } from "~utils";
import gameActionsCreator from "~redux/game/actions";

class Game extends Component {

  render(){
    const history = this.props.history;
    const winner = calculateWinner(this.props.current.squares);

    const moves = history.map((step,move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.props.jumpTo(move)}>{desc}</button>
          </li>
        );
    }
    );

    let status;
    if(winner) {
      status = `Winner: ${winner}`;
    } else {
      status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
    }

    return (
      <div className={styles.game}>
        <Board />
        <div className={styles.gameInfo}>
          {status}
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  history: state.history,
  stepNumber: state.stepNumber,
  xIsNext: state.xIsNext,
  current: state.current
  });
const mapDispatchToProps = dispatch => ({
  jumpTo: historyId => dispatch(gameActionsCreator.historyClick(historyId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);

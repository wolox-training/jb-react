import React, { Component } from 'react';

import { connect } from 'react-redux';

import styles from './styles.module.scss';
import Board from './components/Board';
import MatchHistory from './components/MatchHistory';
import JumpText from './components/JumpText';
import { calculateWinner } from '~utils';
import { NEXT_PLAYER, WINNER, TIC, TAC } from '~constants/text';

class Game extends Component {
  render() {
    const { current, xIsNext } = this.props;
    const history = this.props.history;
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => <JumpText move={move} />);
    let status = null;
    if (winner) {
      status = WINNER + winner;
    } else {
      status = NEXT_PLAYER + (xIsNext ? TIC : TAC);
    }

    return (
      <div className={styles.game}>
        <Board />
        <div className={styles.gameInfo}>
          {status}
          <ol>{moves}</ol>
        </div>
        <MatchHistory />
      </div>
    );
  }
}

const mapStateToProps = ({ game: { history, stepNumber, xIsNext, current } }) => ({
  history,
  stepNumber,
  xIsNext,
  current
});

export default connect(
  mapStateToProps,
  null
)(Game);

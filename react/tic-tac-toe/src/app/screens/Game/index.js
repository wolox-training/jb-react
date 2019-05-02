import React, { Component } from 'react';

import { connect } from 'react-redux';

import styles from './styles.module.scss';
import Board from './components/Board';
import MatchHistory from './components/MatchHistory';
import { calculateWinner } from "~utils";
import gameActionsCreator from "~redux/game/actions";
import { JUMP_TEXT, GAME_START_TEXT, NEXT_PLAYER, WINNER, TIC, TAC } from "~constants";

class Game extends Component {
  jumpText = move => {
    return move ? JUMP_TEXT + move : GAME_START_TEXT;
  }

  render() {
    const { current, jumpTo, xIsNext } = this.props;
    const history = this.props.history;
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{this.jumpText(move)}</button>
        </li>
      );
    });
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

const mapStateToProps = ({ game: { history,stepNumber, xIsNext, current } }) => ({
  history: history,
  stepNumber: stepNumber,
  xIsNext: xIsNext,
  current: current
  });

const mapDispatchToProps = dispatch => ({
  jumpTo: historyId => dispatch(gameActionsCreator.historyClick(historyId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);

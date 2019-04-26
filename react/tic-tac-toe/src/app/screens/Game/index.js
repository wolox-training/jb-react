
import React, {Component} from 'react';
import { connect } from 'react-redux';

import styles from './styles.module.scss';
import Board from './components/Board';
import MatchHistory from './components/MatchHistory';
import { calculateWinner } from "~utils";
import gameActionsCreator from "~redux/game/actions";
import { JUMP_TEXT, GAME_START_TEXT, NEXT_PLAYER, WINNER, TIC, TAC } from "~constants";

class Game extends Component {

  render(){
    const { current, jumpTo, xIsNext } = this.props;
    const history = this.props.history;
    const winner = calculateWinner(current.squares);
    const moves = history.map((step,move) => {
      const desc = move ?
        JUMP_TEXT + move :
        GAME_START_TEXT;
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{desc}</button>
          </li>
        );
    });
    let status;
    if(winner) {
      status = `${WINNER} ${winner}`;
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
const mapStateToProps = ( {game} ) => ({
  history: game.history,
  stepNumber: game.stepNumber,
  xIsNext: game.xIsNext,
  current: game.current
  });
const mapDispatchToProps = dispatch => ({
  jumpTo: historyId => dispatch(gameActionsCreator.historyClick(historyId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);

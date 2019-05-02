import React from 'react';

import Square from '../Square';
import styles from './styles.module.scss';

<<<<<<< HEAD
class Board extends Component {
  renderSquare = i => <Square id={i} />;

  render() {
    return (
      <div className={styles.gameBoard}>
        <div className={styles.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
=======
function Board() {
  return (
    <div className={styles.gameBoard}>
      <div className={styles.boardRow}>
        <Square id={0} />
        <Square id={1} />
        <Square id={2} />
      </div>
      <div className={styles.boardRow}>
        <Square id={3} />
        <Square id={4} />
        <Square id={5} />
>>>>>>> api-1
      </div>
      <div className={styles.boardRow}>
        <Square id={6} />
        <Square id={7} />
        <Square id={8} />
      </div>
    </div>
  );
}

export default Board;

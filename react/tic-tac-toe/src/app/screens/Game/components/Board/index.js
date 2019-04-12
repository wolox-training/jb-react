import React, { Component, Fragment } from 'react';

import Square from '../Square';

import styles from './styles.module.scss';

class Board extends Component {

  renderSquare(i) {
    return <Square id={i} />;
  }

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
      </div>
    );
  }
}

Board.propTypes = {
};

export default Board;

import React, { Component } from 'react';
import { array, func } from 'prop-types';

import Square from '../Square';

import styles from './styles.module.scss';

class Board extends Component {

  renderSquare(i) {
    const {squares, onClick} = this.props;
    return (
      <Square
        value={squares[i]}
        onClick={onClick}
        squareNumber={i}
      />
    );
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
  value : array,
  onClick: func,
  squares: array
};

export default Board;

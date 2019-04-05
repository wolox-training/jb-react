import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Square from '../Square';

import styles from './styles.module.scss';

class Board extends Component {

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick = {() => this.props.onClick(i)}
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
  value : PropTypes.array,
  onClick: PropTypes.func 
};

export default Board;

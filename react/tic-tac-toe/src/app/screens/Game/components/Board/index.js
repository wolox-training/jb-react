import React from 'react';

import Square from '../Square';
import styles from './styles.module.scss';

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

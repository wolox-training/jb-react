import React, {Component} from 'react';
import PropTypes, {func, string} from 'prop-types';

import styles from './styles.module.scss';

function Square({value, onClick}){
  return(
    <button type="button" className={styles.square} onClick={onClick}>
      {value}
    </button>
    );
}

Square.propTypes = {
  onClick : func,
  value : string
}


export default Square;

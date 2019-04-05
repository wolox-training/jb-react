import React, {Component} from 'react';
import PropTypes, {func, string} from 'prop-types';

import styles from './styles.module.scss';

function Square(props){
  return(
    <button type="button" className={styles.square} onClick={props.onClick}>
      {props.value}
    </button>
    );
}

Square.propTypes = {
  onClick : func,
  value : string
}


export default Square;

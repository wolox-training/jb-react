import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

import styles from './styles.module.scss';

function Square(props){
  return(
    <button type="button" className={styles.square} onClick={props.onClick}>
      {props.value}
    </button>
    );
}

Square.propTypes = {
  onClick : PropTypes.func,
  value : PropTypes.string
}


export default Square;

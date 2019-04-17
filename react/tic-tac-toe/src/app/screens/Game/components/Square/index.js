import React, { Component } from 'react';
import {func, string} from 'prop-types';

import styles from './styles.module.scss';

class Square extends Component {
  clickHandler = () => {
    const { onClick, squareNumber } = this.props;
    onClick(squareNumber);
  }
  
  render() {
    return(
      <button type="button" className={styles.square} onClick={this.clickHandler}>
        {this.props.value}
      </button>
      );
  }
}

Square.propTypes = {
  onClick : func,
  value : string
}


export default Square;

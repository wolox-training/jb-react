import React from 'react';
import propTypes from 'prop-types';

import styles from './styles.module.scss';

const Square = (props) => (
  <button type="button" className={styles.square}>
    {props.value}
  </button>
);

Square.propTypes = {
  value: propTypes.number
};

export default Square;

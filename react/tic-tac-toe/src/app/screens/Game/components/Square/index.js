import React from 'react';
import {func, string} from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles.module.scss';

function Square({id, value}){
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

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => ({
  onClick(squareId){
    dispatch()
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Square);

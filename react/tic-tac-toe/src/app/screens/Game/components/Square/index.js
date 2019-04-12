import React from 'react';
import {func, string} from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles.module.scss';
import actionCreators from '~redux/game/actions';

function Square({id, value, onClick}){
  return(
    <button type="button" className={styles.square} onClick={onClick(id)}>
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
    dispatch(actionCreators.squareClick(squareId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Square);

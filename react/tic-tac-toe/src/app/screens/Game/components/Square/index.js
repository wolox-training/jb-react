import React, { Component } from 'react';
import {func, string} from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles.module.scss';
import gameActionsCreators from '~redux/game/actions';

class Square extends Component {
  clickHandler = () => {
    this.props.onClick(this.props.id)
  }

  render() {
    return(
      <button type="button" className={styles.square} onClick={this.clickHandler}>
        {this.props.current.squares[this.props.id]}
      </button>
      );
  }
}

Square.propTypes = {
  onClick : func,
  value : string
}

const mapStateToProps = ({current}) => ({
  current
});

const mapDispatchToProps = dispatch => ({
  onClick(squareId) {
    dispatch(gameActionsCreators.squareClick(squareId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Square);

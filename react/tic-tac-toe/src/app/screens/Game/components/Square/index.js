import React, { Component } from 'react';
import { func, arrayOf, string, shape } from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles.module.scss';
import gameActionsCreators from '~redux/game/actions';

class Square extends Component {
  clickHandler = () => {
    const { onClick, id } = this.props;
    onClick(id);
  }

  render() {
    const { current, id } = this.props;
    return(
      <button type="button" className={styles.square} onClick={this.clickHandler}>
        {current.squares[id]}
      </button>
    );
  }
}

Square.propTypes = {
  onClick: func,
  current: shape({
    squares: arrayOf(string)
  })
}

const mapStateToProps = ({ game: { current } }) => ({
  current
});

const mapDispatchToProps = dispatch => ({
  onClick: squareId => dispatch(gameActionsCreators.squareClick(squareId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Square);

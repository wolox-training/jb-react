import React, { Component } from 'react';
import { func } from 'prop-types';
import { bookSelectedPropType } from '@constants/propTypes';
import Button from '@components/Button';
import { connect } from 'react-redux';
import actionsCreators from '@redux/book/actions';

import styles from './styles.scss';

class Item extends Component {
  handlePlusClick = () => {
    this.props.addItem(this.props.item.id);
  };
  handleTrashClick = () => {
    this.props.removeItem(this.props.item.id);
  };
  render() {
    return (
      <li className={styles.item}>
        <h3 className={styles.title}>{this.props.item.name}</h3>
        <span className={styles.contentButtons}>
          <span className={styles.quantity}>{this.props.item.quantity}</span>
          <Button className={styles.buttonCart} onClick={this.handlePlusClick}>
            <i className="fa fa-plus" />
          </Button>
          <Button className={styles.buttonCart} onClick={this.handleTrashClick} isDanger>
            <i className="fa fa-trash" />
          </Button>
        </span>
      </li>
    );
  }
}

Item.propTypes = {
  item: bookSelectedPropType,
  addItem: func.isRequired,
  removeItem: func.isRequired
};

const mapDispatchToProps = dispatch => ({
  addItem(itemId) {
    dispatch(actionsCreators.addItem(itemId));
  },
  removeItem(itemId) {
    dispatch(actionsCreators.removeItem(itemId));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Item);

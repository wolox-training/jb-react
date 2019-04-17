import React, { Component } from 'react';
import { func } from 'prop-types';
import { bookSelectedPropType } from '@constants/propTypes';
import Button from '@components/Button';
import { connect } from 'react-redux';
import cartActionsCreators from '@redux/cart/actions';

import styles from './styles.scss';

class Item extends Component {
  handlePlusClick = () => this.props.addItem(this.props.item.id);
  handleTrashClick = () => this.props.removeItem(this.props.item.id);
  render() {
    const {
      item: { name, quantity }
    } = this.props;
    return (
      <li className={styles.item}>
        <h3 className={styles.title}>{name}</h3>
        <span className={styles.contentButtons}>
          <span className={styles.quantity}>{quantity}</span>
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
  addItem: itemId => dispatch(cartActionsCreators.addItem(itemId)),
  removeItem: itemId => dispatch(cartActionsCreators.removeItem(itemId))
});

export default connect(
  null,
  mapDispatchToProps
)(Item);

import React from 'react';
import { func } from 'prop-types';
import { bookSelectedPropType } from '@constants/propTypes';
import Button from '@components/Button';
import { connect } from 'react-redux';
import actionsCreators from '@redux/book/actions';

import styles from './styles.scss';

const Item = ({ addItem, removeItem, item }) => (
  <li className={styles.item}>
    <h3 className={styles.title}>{item.name}</h3>
    <span className={styles.contentButtons}>
      <span className={styles.quantity}>{item.quantity}</span>
      <Button className={styles.buttonCart} onClick={() => addItem(item.id)}>
        <i className="fa fa-plus" />
      </Button>
      <Button className={styles.buttonCart} onClick={() => removeItem(item.id)} isDanger>
        <i className="fa fa-trash" />
      </Button>
    </span>
  </li>
);

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
  undefined,
  mapDispatchToProps
)(Item);

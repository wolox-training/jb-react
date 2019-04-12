import React, { PureComponent, Fragment } from 'react';
import { arrayOf } from 'prop-types';
import { bookSelectedPropType } from '@constants/propTypes';
import Button from '@components/Button';
import { connect } from 'react-redux';
import cartActionsCreators from '@redux/cart/actions';

import Item from './components/Item';
import styles from './styles.scss';

class ShoppingCart extends PureComponent {
  total = (accumulator, currentValue) => accumulator + currentValue.quantity;

  renderItem = item => <Item key={item.id} item={item} />;

  render() {
    return (
      <Fragment>
        <Button className={styles.buttonCart} onClick={this.props.toggleContent}>
          <i className="fa fa-shopping-cart" />
        </Button>
        <div className={`${styles.container} ${this.props.open ? styles.open : ''}`}>
          <h1 className={styles.title}>Cart</h1>
          <ul className={styles.content}>{this.props.bookSelected.map(this.renderItem)}</ul>
          <h2 className={`${styles.title} ${styles.total}`}>
            Total:
            {this.props.bookSelected.reduce(this.total, 0)}
          </h2>
        </div>
      </Fragment>
    );
  }
}

ShoppingCart.propTypes = {
  bookSelected: arrayOf(bookSelectedPropType).isRequired
};

const mapStateToProps = ({ cart }) => ({
  bookSelected: cart.bookSelected,
  open: cart.open
});

const mapDispatchToProps = dispatch => ({
  toggleContent() {
    dispatch(cartActionsCreators.toggleCart());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);

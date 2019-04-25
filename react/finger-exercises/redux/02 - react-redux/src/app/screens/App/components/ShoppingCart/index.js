import React, { PureComponent, Fragment } from 'react';
import { arrayOf, func, boolean } from 'prop-types';
import { booksSelectedPropType } from '@constants/propTypes';
import Button from '@components/Button';
import { connect } from 'react-redux';
import cartActionsCreators from '@redux/cart/actions';

import Item from './components/Item';
import styles from './styles.scss';

class ShoppingCart extends PureComponent {
  total = (accumulator, currentValue) => accumulator + currentValue.quantity;

  renderItem = item => <Item key={item.id} item={item} />;

  render() {
    const { toggleContent, booksSelected, open } = this.props;
    return (
      <Fragment>
        <Button className={styles.buttonCart} onClick={toggleContent}>
          <i className="fa fa-shopping-cart" />
        </Button>
        <div className={`${styles.container} ${open ? styles.open : ''}`}>
          <h1 className={styles.title}>Cart</h1>
          <ul className={styles.content}>{booksSelected.map(this.renderItem)}</ul>
          <h2 className={`${styles.title} ${styles.total}`}>
            Total:
            {booksSelected.reduce(this.total, 0)}
          </h2>
        </div>
      </Fragment>
    );
  }
}

ShoppingCart.propTypes = {
  booksSelected: arrayOf(booksSelectedPropType).isRequired,
  open: boolean,
  toggleContent: func
};

const mapStateToProps = ({ cart }) => ({
  booksSelected: cart.booksSelected,
  open: cart.open
});

const mapDispatchToProps = dispatch => ({
  toggleContent: () => dispatch(cartActionsCreators.toggleCart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);

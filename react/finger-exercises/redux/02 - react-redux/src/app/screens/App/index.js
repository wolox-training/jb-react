import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import bookActionsCreators from '@redux/book/actions';
import cartActionsCreators from '@redux/cart/actions';
import { arrayOf, func } from 'prop-types';
import { bookPropType } from '@constants/propTypes';

import Book from './components/Book';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles.scss';

class App extends Component {
  componentDidMount() {
    this.props.getOriginalBooks();
  }

  CONFIGURATION_BUTTON = {
    add: {
      text: 'Add to cart',
      function: this.props.addToCart
    },
    remove: {
      text: 'Remove',
      function: this.props.removeItem,
      isDanger: true
    }
  };

  renderBooks = item => {
    const showButton = !this.props.bookSelected.some(el => el.id === item.id);
    const configButton = showButton ? this.CONFIGURATION_BUTTON.add : this.CONFIGURATION_BUTTON.remove;
    return <Book key={item.id} data={item} configButton={configButton} />;
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className={styles.container}>
          <Search />
          {this.props.originalData.length ? (
            this.props.books.map(this.renderBooks)
          ) : (
            <div className={styles.noData}>
              <h2 className={styles.title}>No Data</h2>
            </div>
          )}
        </div>
        {this.props.bookSelected.length ? <ShoppingCart /> : null}
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ books, cart }) => ({
  books: books.books,
  bookSelected: cart,
  originalData: books.originalData
});

const mapDispatchToProps = dispatch => ({
  getOriginalBooks() {
    dispatch(bookActionsCreators.getBooks());
  },
  addToCart(item) {
    dispatch(cartActionsCreators.addToCart(item));
  },
  removeItem(itemId) {
    dispatch(cartActionsCreators.removeItem(itemId));
  }
});

App.propTypes = {
  books: arrayOf,
  bookSelected: arrayOf(bookPropType),
  originalData: arrayOf(bookPropType),
  getOriginalBooks: func,
  addToCart: func,
  removeItem: func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

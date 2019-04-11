import { createStore, compose, combineReducers } from 'redux';

import books from './book/reducer';
import cart from './cart/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
export default createStore(combineReducers(books, cart), composeEnhancers());

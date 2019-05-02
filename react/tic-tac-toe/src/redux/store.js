import game from './game/reducer';
import matches from './matches/reducer';
import { reducer as form } from 'redux-form';

import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const enhancers = [applyMiddleware(thunk)];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(combineReducers({ game, matches, form }), composeEnhancers(...enhancers));

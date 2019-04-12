import game from './game/reducer';

import { createStore, compose, applyMiddleware } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(game, composeEnhancers());
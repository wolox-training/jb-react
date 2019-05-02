import game from './game/reducer';
import matches from './matches/reducer';
import login from './login/reducer';
import { reducer as form } from 'redux-form';

import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const enhancers = [applyMiddleware(thunk)];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ game, matches, form, login });
export default createStore(rootReducer, composeEnhancers(...enhancers));

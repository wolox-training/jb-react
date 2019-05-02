import game from './game/reducer';
import matches from './matches/reducer';
import { reducer as form } from 'redux-form';

import { createStore, compose, combineReducers} from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(combineReducers( { game, matches, form } ), composeEnhancers());

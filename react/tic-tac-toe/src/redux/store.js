import login from './login/reducer';
import game from './game/reducer';
import matches from './matches/reducer';
import { createBrowserHistory } from 'history';
import { reducer as form } from 'redux-form';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createStore, compose, combineReducers as CR, applyMiddleware } from 'redux';
import { wrapCombineReducers, fetchMiddleware } from 'redux-recompose';
import thunk from 'redux-thunk';

const combineReducers = wrapCombineReducers(CR);

const rootReducer = routerHistory =>
  combineReducers({
    game,
    form,
    matches,
    login,
    router: connectRouter(routerHistory)
  });

export const history = createBrowserHistory();
const enhancers = [applyMiddleware(thunk, routerMiddleware(history), fetchMiddleware)];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer(history), composeEnhancers(...enhancers));

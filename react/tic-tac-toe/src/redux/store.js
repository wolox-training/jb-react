import game from './game/reducer';
import matches from './matches/reducer';
import login from './login/reducer';
import { createBrowserHistory } from 'history';
import { reducer as form } from 'redux-form';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = routerHistory =>
  combineReducers({
    game,
    matches,
    form,
    login,
    router: connectRouter(routerHistory)
  });

export const history = createBrowserHistory();
const enhancers = [applyMiddleware(thunk, routerMiddleware(history))];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer(history), composeEnhancers(...enhancers));

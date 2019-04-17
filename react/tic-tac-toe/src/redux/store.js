import game from './game/reducer';

import { createStore, compose} from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(game, composeEnhancers());
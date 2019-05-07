import React from 'react';

import Game from './screens/Game';
import Login from './screens/Login';
import { history } from '~redux/store';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import ConditionalRoute from './components/ConditionalRoute';
import { isLogged } from './utils/validate';

import '../scss/application.scss';
import ConditionalRedirect from './components/ConditionalRedirect';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <ConditionalRoute strict path="/game" component={Game} condition={isLogged()} redirect="/login" />
        <ConditionalRoute strict path="/login" component={Login} condition={!isLogged()} redirect="/game" />
        <ConditionalRedirect condition={isLogged()} first="/game" second="/login" />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;

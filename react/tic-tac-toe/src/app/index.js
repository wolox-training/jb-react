import React from 'react';

import Game from './screens/Game';
import Login from './screens/Login';
import { history } from '~redux/store';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import PrivateRoute from './components/PrivateRoute';
import { isLogged } from './utils/validate';

import '../scss/application.scss';
import ConditionalRedirect from './components/ConditionalRedirect';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <PrivateRoute strict path="/game" component={Game} condition={isLogged} redirect="/login" />
        <Route strict path="/login" component={Login} />
        <ConditionalRedirect condition={isLogged} first="/game" second="/login" />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;

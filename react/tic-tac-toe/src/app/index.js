import React from 'react';

import Main from './screens/Main';
import Login from './screens/Login';
import { history } from '~redux/store';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import ConditionalRoute from './components/ConditionalRoute';
import { isLogged, isNotLogged } from './utils/validate';

import '../scss/application.scss';
import ConditionalRedirect from './components/ConditionalRedirect';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <ConditionalRoute path="/game" component={Main} condition={isLogged} redirect="/login" />
        <ConditionalRoute strict path="/login" component={Login} condition={isNotLogged} redirect="/game" />
        <ConditionalRedirect condition={isLogged} first="/game" second="/login" />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;

import React from 'react';

import Game from './screens/Game';
import Login from './screens/Login';
import { history } from '~redux/store';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import ConditionalRoute from './components/ConditionalRoute';
import { isLogged, isNotLogged } from './utils/validate';
import TopBarContainer from './components/TopBar';

import '../scss/application.scss';
import ConditionalRedirect from './components/ConditionalRedirect';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route strict path="/topbar" component={TopBarContainer} />
        <ConditionalRoute strict path="/game" component={Game} condition={isLogged} redirect="/login" />
        <ConditionalRoute strict path="/login" component={Login} condition={isNotLogged} redirect="/game" />
        <ConditionalRedirect condition={isLogged} first="/game" second="/login" />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;

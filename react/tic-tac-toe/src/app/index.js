import React from 'react';

import Game from './screens/Game';
import Login from './screens/Login';
import { history } from '~redux/store';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import '../scss/application.scss';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route strict path="/login" component={Game} />
        <Route path="/" component={Login} />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;

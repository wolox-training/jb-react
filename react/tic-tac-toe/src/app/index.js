import React from 'react';

import Game from './screens/Game';
import Login from './screens/Login';
import { history } from '~redux/store';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import PrivateRoute from './components/PrivateRoute';

import '../scss/application.scss';

const validate = true;

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <PrivateRoute strict path="/game" component={Game} auth={validate} />
        <Route strict path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;

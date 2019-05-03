import React from 'react';

import Game from './screens/Game';
import Login from './screens/Login';
import { history } from '~redux/store';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import PrivateRoute from './components/PrivateRoute';
import { connect } from 'react-redux';

import '../scss/application.scss';

function App({ token }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <PrivateRoute strict path="/game" component={Game} auth={token} />
        <Route strict path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    </ConnectedRouter>
  );
}

const mapStateToProps = ({ login: { token } }) => ({
  token
});

export default connect(
  mapStateToProps,
  null
)(App);

import React, { Fragment } from 'react';
import TopBar from './components/TopBar';
import { Route, Switch, Redirect } from 'react-router';
import Game from './screens/Game';
import MatchHistory from './screens/MatchHistory';

function Main() {
  return (
    <Fragment>
      <TopBar />
      <Switch>
        <Route path="/game" component={Game} />
        <Route strict path="/history" component={MatchHistory} />
        <Redirect to="/game" />
      </Switch>
    </Fragment>
  );
}

export default Main;

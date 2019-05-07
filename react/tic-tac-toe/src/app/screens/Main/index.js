import React, { Fragment } from 'react';
import TopBar from './components/TopBar';
import { Route, Switch } from 'react-router';
import Game from './screens/Game';
import MatchHistory from './screens/MatchHistory';

function Main() {
  return (
    <Fragment>
      <TopBar />
      <Route strict path="/game" component={Game} />
      <Route strict path="/history" component={MatchHistory} />
    </Fragment>
  );
}

export default Main;

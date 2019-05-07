import React, { Fragment } from 'react';
import TopBar from './components/TopBar';
import { Route, Switch } from 'react-router';
import Game from './screens/Game';
import GameHistory from './screens/GameHistory';

function Main() {
  return (
    <Fragment>
      <TopBar />
      <Route strict path="/game" component={Game} />
      <Route strict path="/history" component={GameHistory} />
    </Fragment>
  );
}

export default Main;

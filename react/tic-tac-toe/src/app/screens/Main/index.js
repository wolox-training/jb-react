import React, { Fragment } from 'react';
import TopBar from './components/TopBar';
import { Route, Switch } from 'react-router';
import Game from './screens/Game';

function Main() {
  return (
    <Fragment>
      <TopBar />
      <Switch>
        <Route component={Game} />
      </Switch>
    </Fragment>
  );
}

export default Main;

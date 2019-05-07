import React, { Fragment } from 'react';

import Login from './screens/Login';
import Main from './screens/Main';
import { history } from '~redux/store';
import { ConnectedRouter } from 'connected-react-router';
import ConditionalRoute from './components/ConditionalRoute';
import { isLogged } from './utils/validate';

import '../scss/application.scss';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Fragment>
        <ConditionalRoute path="/" publicComponent={Login} privateComponent={Main} condition={isLogged} />
      </Fragment>
    </ConnectedRouter>
  );
}

export default App;

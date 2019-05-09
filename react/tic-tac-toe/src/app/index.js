import React from 'react';

import Login from './screens/Login';
import Main from './screens/Main';
import { history } from '~redux/store';
import { ConnectedRouter } from 'connected-react-router';
import ConditionalRoute from './components/ConditionalRoute';
import { isLogged } from './utils/validate';

import '../scss/application.scss';

function App() {
  const condition = isLogged();
  debugger;
  return (
    <ConnectedRouter history={history}>
      <ConditionalRoute path="/" publicComponent={Login} privateComponent={Main} condition={condition} />
    </ConnectedRouter>
  );
}

export default App;

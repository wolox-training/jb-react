import React from 'react';
import { Route } from 'react-router-dom';

function ConditionalRoute({ privateComponent: Component, publicComponent: Component2, condition, ...rest }) {
  return (
    <Route {...rest} render={props => (condition() ? <Component {...props} /> : <Component2 {...props} />)} />
  );
}

export default ConditionalRoute;

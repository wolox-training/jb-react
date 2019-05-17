import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ConditionalRoute({ component: Component, condition, redirect, ...rest }) {
  return (
    <Route {...rest} render={props => (condition ? <Component {...props} /> : <Redirect to={redirect} />)} />
  );
}

export default ConditionalRoute;

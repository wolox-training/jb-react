import React from 'react';
import { Route } from 'react-router-dom';

function ConditionalRoute({
  privateComponent: PrivateComponent,
  publicComponent: PublicComponent,
  condition,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props => (condition() ? <PrivateComponent {...props} /> : <PublicComponent {...props} />)}
    />
  );
}

export default ConditionalRoute;

import React from 'react';
import Spinner from 'react-spinkit';

function WithLoading(Component) {
  return function Loading({ isLoading, ...props }) {
    debugger;
    return isLoading ? <Spinner /> : <Component {...props} />;
  };
}

export default WithLoading;

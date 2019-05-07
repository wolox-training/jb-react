import { Redirect } from 'react-router-dom';
import React from 'react';

function ConditionalRedirect({ condition, first, second }) {
  return <Redirect to={condition ? first : second} />;
}

export default ConditionalRedirect;

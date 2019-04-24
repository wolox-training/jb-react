import React from 'react';
import { Field, reduxForm } from 'redux-form'

const LoginForm = ({ handleSubmit }) => {
  return(
  <form onSubmit={handleSubmit}>
    <Field/>
    <Field/>
  </form>
)};

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default LoginForm;
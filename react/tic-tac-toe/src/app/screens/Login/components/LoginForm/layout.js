import React from 'react';
import { Field, reduxForm } from 'redux-form'
import CustomInput from '../CustomInput'

let LoginForm = ({ handleSubmit }) => {
  return(
    <form onSubmit={handleSubmit}>
      <Field 
        name="email"
        component={CustomInput}
        type="text"
        label="Email"
      />
      <Field 
        name="password"
        component={CustomInput}
        type="text"
        label="Password"
      />
      <button type="submit">Log in</button>
    </form>
  )
};

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default LoginForm;
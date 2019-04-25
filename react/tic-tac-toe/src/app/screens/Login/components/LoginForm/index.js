import React, { Component } from 'react';
import LoginForm from './layout';
import { reduxForm } from 'redux-form';

class LoginFormContainer extends Component {
  handleSubmit = values => {
    // here we handle de submit
  }

  render() {
    return <LoginForm handleSubmit={this.handleSubmit}/>;
  }
}

LoginFormContainer = reduxForm({
  form: 'login'
})(LoginFormContainer);

export default LoginFormContainer;
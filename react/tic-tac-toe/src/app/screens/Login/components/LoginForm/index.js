import React, { Component } from 'react';
import LoginForm from './layout';
import { reduxForm } from 'redux-form';

class LoginFormContainer extends Component {
  handleSubmit = values => {
    // here we handle de submit
  }

  render() {
    const { invalid } = this.props;
    return <LoginForm handleSubmit={this.handleSubmit} invalid={invalid}/>;
  }
}

LoginFormContainer = reduxForm({
  form: 'login'
})(LoginFormContainer);

export default LoginFormContainer;
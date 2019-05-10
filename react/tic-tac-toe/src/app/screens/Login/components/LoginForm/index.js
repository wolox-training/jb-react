import React, { Component } from 'react';
import LoginForm from './layout';
import { connect } from 'react-redux';
import LoginService from '~services/LoginService';

class LoginFormContainer extends Component {
  handleSubmit = data => {
    this.props.dispatch(LoginService.postLogin(data));
  }

  render() {
    const { hasError } = this.props;
    return <LoginForm onSubmit={this.handleSubmit} hasError={hasError}/>;
  }
}

LoginFormContainer = connect()(LoginFormContainer);

export default LoginFormContainer;

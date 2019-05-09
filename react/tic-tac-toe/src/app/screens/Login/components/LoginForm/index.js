import React, { Component } from 'react';
import LoginForm from './layout';
import loginActions from "~redux/login/actions";
import { connect } from 'react-redux';

class LoginFormContainer extends Component {
  handleSubmit = data => {
    const { dispatch, postLogin } = this.props;
    dispatch(postLogin(data));
  }

  render() {
    const { hasError } = this.props;
    return <LoginForm onSubmit={this.handleSubmit} hasError={hasError}/>;
  }
}

const mapStateToProps = ({ login: { postLogin, hasError } }) => ({
  postLogin
});

LoginFormContainer = connect(
  mapStateToProps,
  null
)(LoginFormContainer);

export default LoginFormContainer;

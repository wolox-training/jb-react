import React, { Component } from 'react';
import LoginForm from './layout';
import { connect } from 'react-redux';
import LoginService from '~services/LoginService';
import WithLoading from '~components/WithLoading';

class LoginFormContainer extends Component {
  handleSubmit = data => {
    const { login } = this.props;
    login(data);
  }

  render() {
    const { hasError } = this.props;
    return <LoginForm onSubmit={this.handleSubmit} hasError={hasError}/>;
  }
}

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(LoginService.postLogin(data))
});

const mapStateToProps = ({ login: { loginDataLoading }}) => ({
  isLoading: loginDataLoading
});

export default connect(mapStateToProps, mapDispatchToProps)(WithLoading(LoginFormContainer));

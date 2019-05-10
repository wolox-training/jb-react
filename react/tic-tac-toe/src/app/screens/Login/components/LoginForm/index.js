import React, { Component } from 'react';
import LoginForm from './layout';
import { connect } from 'react-redux';
import LoginService from '~services/LoginService';
import WithLoading from '~components/WithLoading';

class LoginFormContainer extends Component {
  handleSubmit = data => {
    const { dispatch } = this.props;
    dispatch(LoginService.postLogin(data));
  }

  render() {
    const { hasError } = this.props;
    return <LoginForm onSubmit={this.handleSubmit} hasError={hasError}/>;
  }
}

const mapStateToProps = ({ login: { loginDataError, loginDataLoading }}) => ({
  isLoading: loginDataLoading,
  hasError: loginDataError
});

export default connect(mapStateToProps)(WithLoading(LoginFormContainer));

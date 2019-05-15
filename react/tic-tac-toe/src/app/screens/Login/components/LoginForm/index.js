import React, { Component } from 'react';
import LoginForm from './layout';
import { connect } from 'react-redux';
import LoginService from '~services/LoginService';
import WithLoading from '~components/WithLoading';

class LoginFormContainer extends Component {
  handleSubmit = data => {
<<<<<<< HEAD
    const { dispatch } = this.props;
    dispatch(LoginService.postLogin(data));
=======
    const { login } = this.props;
    login(data);
>>>>>>> recompose
  }

  render() {
    const { hasError } = this.props;
    return <LoginForm onSubmit={this.handleSubmit} hasError={hasError}/>;
  }
}

<<<<<<< HEAD
const mapStateToProps = ({ login: { loginDataError, loginDataLoading }}) => ({
  isLoading: loginDataLoading,
  hasError: loginDataError
});
=======
const mapDispatchToProps = dispatch => ({
  login: data => dispatch(LoginService.postLogin(data))
});

LoginFormContainer = connect(null, mapDispatchToProps)(LoginFormContainer);
>>>>>>> recompose

export default connect(mapStateToProps)(WithLoading(LoginFormContainer));

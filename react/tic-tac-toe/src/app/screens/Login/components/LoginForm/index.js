import React, { Component } from 'react';
import LoginForm from './layout';
import loginActions from "~redux/login/actions";
import { connect} from 'react-redux';

class LoginFormContainer extends Component {
  handleSubmit = data => {
    const { login } = this.props;;
    login(data);
  }

  render() {
    const { hasError } = this.props;
    return <LoginForm onSubmit={this.handleSubmit} hasError={hasError}/>;
  }
}

const mapStateToProps = ({ login: { hasError } }) => ({
  hasError
});

const mapDispatchToProps = dispatch => ({
  login: values => dispatch(loginActions.login(values)) 
});

LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer);

export default LoginFormContainer;

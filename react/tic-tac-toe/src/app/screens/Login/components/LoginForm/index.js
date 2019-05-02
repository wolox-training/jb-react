import React, { Component } from 'react';
import LoginForm from './layout';
import { reduxForm } from 'redux-form';
import loginActions from "~redux/login/actions";
import { connect} from 'react-redux';

class LoginFormContainer extends Component {
  handleSubmit = event => {
    debugger;
    const data = new FormData(event.target);
    const send = {
      email: data.get('email'),
      password: data.get('password')
    };
    const { login } = this.props;;
    login(send);
    event.preventDefault();
  }

  render() {
    const { invalid, hasError } = this.props;
    return <LoginForm onSubmit={this.handleSubmit} invalid={invalid} error={hasError}/>;
  }
}

const mapStateToProps = ({ hasError }) => ({
  hasError
});

const mapDispatchToProps = dispatch => ({
  login: values => dispatch(loginActions.login(values)) 
});

LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer);

LoginFormContainer = reduxForm({
  form: 'login'
})(LoginFormContainer);

export default LoginFormContainer;

import React, { Component } from 'react';
import LoginForm from './layout';
import { reduxForm } from 'redux-form';
import loginActions from "~redux/login/actions";
import { connect} from 'react-redux';

class LoginFormContainer extends Component {
  handleSubmit = event => {
    debugger;
    alert("WORKING");
    event.preventDefault();
    //alert(JSON.stringify(values, null, 4));
    //this.login(this.props.values);
  }

  render() {
    const { invalid } = this.props;
    return <LoginForm handleSubmit={this.handleSubmit} invalid={invalid}/>;
  }
}

const mapDispatchToProps = dispatch => ({
  login: values => dispatch(loginActions.login(values)) 
});

LoginFormContainer = connect(
  null,
  mapDispatchToProps
)(LoginFormContainer);

LoginFormContainer = reduxForm({
  form: 'login'
})(LoginFormContainer);


export default LoginFormContainer;
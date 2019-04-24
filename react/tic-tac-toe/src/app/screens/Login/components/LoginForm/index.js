import React, { Component } from 'react';
import LoginForm from './layout';
import { reduxForm } from 'redux-form';

class LoginFormContainer extends Component {
    handleSubmit = values => {
        window.alert(JSON.stringify(values,null,4));
    }

    render() {
        return <LoginForm handleSubmit={this.handleSubmit}/>;
    }
}

LoginFormContainer = reduxForm({
    form: 'login'
})(LoginFormContainer);

export default LoginFormContainer;
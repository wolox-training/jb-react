import React, { Component } from 'react';
import LoginForm from './layout';

class LoginFormContainer extends Component {
    handleSubmit = () => {
        alert("hola");
    }

    render() {
        return <LoginForm/>;
    }
}

export default LoginFormContainer;
import React, { Component } from 'react';
import LoginFormContainer from './components/LoginForm';
import styles from './styles.module.scss';

class Login extends Component {
  render() {
    return (
      <div className={styles.loginView}>
        <LoginFormContainer/>
      </div>
    );
  }
}

export default Login;
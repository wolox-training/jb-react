import React from 'react';
import LoginFormContainer from './components/LoginForm';
import styles from './styles.module.scss';

function Login() {
  return (
    <div className={styles.loginView}>
      <LoginFormContainer />
    </div>
  );
}

export default Login;

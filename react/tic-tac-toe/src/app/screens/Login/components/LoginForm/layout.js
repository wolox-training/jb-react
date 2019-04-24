import React from 'react';
import { Field } from 'redux-form';
import CustomInput from '../CustomInput';
import styles from './styles.module.scss';

let LoginForm = ({ handleSubmit }) => {
  return(
    <form onSubmit={handleSubmit} className={styles.loginForm} >
      <Field 
        name="email"
        component={CustomInput}
        type="text"
        label="Email"
      />
      <Field 
        name="password"
        component={CustomInput}
        type="password"
        label="Password"
      />
      <button type="submit" className={styles.submitButton}>Log in</button>
    </form>
  )
};

export default LoginForm;
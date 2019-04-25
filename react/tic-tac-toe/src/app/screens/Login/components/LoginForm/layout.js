import React from 'react';
import { Field } from 'redux-form';
import CustomInput from '../CustomInput';
import styles from './styles.module.scss';
import { isRequired, minLength, validEmail } from '../../utils/validate';

let LoginForm = ({ handleSubmit }) => {
  return(
    <form onSubmit={handleSubmit} className={styles.loginForm} >
      <h2 className={styles.formTitle}> Welcome </h2>
      <Field 
        name="email"
        component={CustomInput}
        type="text"
        label="Email"
        validate={[isRequired, validEmail]}
      />
      <Field 
        name="password"
        component={CustomInput}
        type="password"
        label="Password"
        validate={[isRequired, minLength]}
      />
      <button type="submit" className={styles.submitButton}>Log in</button>
    </form>
  )
};

export default LoginForm;
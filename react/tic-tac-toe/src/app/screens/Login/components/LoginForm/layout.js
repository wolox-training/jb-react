import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomInput from '../CustomInput';
import styles from './styles.module.scss';
import { isRequired, minLength, validEmail } from '../../utils/validate';
import {
  LOGIN_TITLE,
  EMAIL_LABEL,
  PASSWORD_LABEL,
  FORM_SUBMIT_BUTTON,
  WRONG_INPUT_TEXT
} from '~constants/text';

function LoginForm({ handleSubmit, invalid, hasError }) {
  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <h2 className={styles.formTitle}>{LOGIN_TITLE}</h2>
      {hasError ? <h3 className={styles.inputError}>{WRONG_INPUT_TEXT}</h3> : null}
      <Field
        name="email"
        component={CustomInput}
        type="text"
        label={EMAIL_LABEL}
        validate={[isRequired, validEmail]}
      />
      <Field
        name="password"
        component={CustomInput}
        type="password"
        label={PASSWORD_LABEL}
        validate={[isRequired, minLength]}
      />
      <button type="submit" className={styles.submitButton} disabled={invalid}>
        {FORM_SUBMIT_BUTTON}
      </button>
    </form>
  );
}

export default reduxForm({
  form: 'login'
})(LoginForm);

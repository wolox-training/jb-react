import React, { Fragment } from 'react';
import styles from './styles.module.scss';

function CustomInput({ label, input, type, meta: { error, touched } }) {
  return (
    <Fragment>
      <label className={styles.label}>{label}</label>
      <input
        {...input}
        type={type}
        className={`
        ${styles.input}
        ${error && touched ? styles.inputError : ' '}
        `}
      />
      {error && touched && <span className={styles.error}>{error}</span>}
    </Fragment>
  );
}

export default CustomInput;

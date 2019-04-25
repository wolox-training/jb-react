import React, { Fragment } from 'react';
import styles from './styles.module.scss';

const CustomInput = ( { label, input, type, meta } ) => {
  return (
    <Fragment>
      <label className={styles.label}>{label}</label>
      <input {...input}
          type={type}
          className={`
          ${styles.input}
          ${meta.error && meta.touched?styles.inputError:' '}
          `}
      />
      { meta.error && meta.touched &&
          <span className={styles.error}>
              {meta.error}
          </span>
      }
    </Fragment>
  );
}


export default CustomInput;
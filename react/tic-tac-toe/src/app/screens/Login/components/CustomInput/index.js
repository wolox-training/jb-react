import React, { Fragment } from 'react';
import styles from './styles.module.scss';

const CustomInput = ( { label, input, type } ) => {
    return (
        <Fragment>
            <label className={styles.label}>{label}</label>
            <input {...input} type={type} className={styles.input}/>
        </Fragment>
    );
}


export default CustomInput;
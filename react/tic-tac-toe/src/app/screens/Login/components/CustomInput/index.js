import React, { Fragment } from 'react';

const CustomInput = ( { label, input, type } ) => {
    return (
        <Fragment>
            <label>{label}</label>
            <input {...input} type={type}/>
        </Fragment>
    );
}

export default CustomInput;
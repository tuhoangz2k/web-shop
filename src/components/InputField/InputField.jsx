import React from 'react';
import './InputField.scss';

function InputField({ errors, register, label, name, type }) {
    const isError = Boolean(errors[name]);
    return (
        <div className={`form-control ${isError ? 'error' : ''}`}>
            <label>{label}</label>
            <input {...register(name)} type={type} />
            {errors[name] && <p>{errors[name].message}</p>}
        </div>
    );
}

export default InputField;

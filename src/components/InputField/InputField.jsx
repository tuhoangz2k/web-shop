import React from 'react';
import './InputField.scss';

function InputField({ errors, register, label, name, type }) {
    return (
        <div className={`form-control ${errors.lastName ? 'error' : ''}`}>
            <label>{label}</label>
            <input {...register(name)} type={type} />
            {errors[name] && <p>{errors[name].message}</p>}
        </div>
    );
}

export default InputField;

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './RegisterForm.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import InputField from '../../../InputField';

const schema = yup.object({
    firstName: yup.string().required().min(6, 'first name min 6 characters'),
    lastName: yup.string().required().min(6, 'last name min 6 characters'),
    email: yup.string().required().email('email invalidate'),
    password: yup.string().required().min(6, 'password is min 6 characters'),
    passwordConfirm: yup
        .string()
        .required()
        .oneOf([yup.ref('password'), null], 'passwrod confirm is not match'),
});

function RegisterForm({ onSubmit, onClick }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleClose = (e) => {
        if (onClick) onClick();
    };

    const handleOnSubmit = async (values) => {
        if (!onSubmit) return;
        await onSubmit(values);
    };
    return (
        <form onSubmit={handleSubmit(handleOnSubmit)} className="logister__form">
            <InputField register={register} label="First Name" name="firstName" errors={errors} type="text" />
            <InputField register={register} label="Last Name" name="lastName" errors={errors} type="text" />
            <InputField register={register} label="Email" name="email" errors={errors} type="text" />
            <InputField register={register} label="Password" name="password" errors={errors} type="password" />
            <InputField
                register={register}
                label="passwordConfirm"
                name="passwordConfirm"
                errors={errors}
                type="password"
            />

            <button type="submit" className="form__btn">
                Register
            </button>
            <span className="form__close" onClick={handleClose}>
                <FontAwesomeIcon icon={faXmark} />
            </span>
        </form>
    );
}

export default RegisterForm;

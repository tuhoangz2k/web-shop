import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from '../../../InputField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './LoginForm.scss';

const schema = yup.object({
    email: yup.string().required().email('email invalidate'),
    password: yup.string().required().min(6, 'password is min 6 characters'),
});

function LoginForm({ onSubmit, onClick }) {
    const handleClose = (e) => {
        if (onClick) onClick();
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleOnSubmit = async (values) => {
        if (!onSubmit) return;
        await onSubmit(values);
    };

    return (
        <form onSubmit={handleSubmit(handleOnSubmit)} className="login__form">
            <InputField register={register} label="Email" name="email" errors={errors} type="text" />
            <InputField register={register} label="Password" name="password" errors={errors} type="password" />

            <button type="submit" className="form__btn">
                Login
            </button>
            <span className="form__close" onClick={handleClose}>
                <FontAwesomeIcon icon={faXmark} />
            </span>
        </form>
    );
}

export default LoginForm;

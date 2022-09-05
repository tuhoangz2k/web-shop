import React from 'react';
import LoginForm from '../LoginForm';
import userApi from '../../../../api/userApi';
import './Login.scss';
import { useDispatch } from 'react-redux';
import { setLogin } from './loginSlice';
function Login({ onClick }) {
    const dispatch = useDispatch();
    const handleSubmit = async (data) => {
        async function authLogin() {
            const res = await userApi.login({
                username: 'mor_2314',
                password: '83r5^_',
            });
            console.log(res);
        }
        dispatch(setLogin());
        onClick();
    };

    return (
        <div className="login-wrapper">
            <LoginForm onSubmit={handleSubmit} onClick={onClick} />
        </div>
    );
}

export default Login;

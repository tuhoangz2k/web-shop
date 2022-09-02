import React from 'react';
import RegisterForm from '../RegisterForm';
import userApi from '../../../../api/userApi';
import './Register.scss';
function Register({ onClick }) {
    const handleSubmit = async (data) => {
        console.log(data);
        try {
            const newUser = {
                email: data.email,
                username: data.email,
                password: data.password,
                name: {
                    firstname: data.firstName,
                    lastname: data.lastName,
                },
                address: {
                    city: 'Hanoi',
                    street: '7835 new road',
                    number: 3,
                    zipcode: '12926-3874',
                    geolocation: {
                        lat: '-37.3159',
                        long: '81.1496',
                    },
                },
                phone: '1-570-236-7033',
            };

            const user = await userApi.register(newUser);
            console.log(user);
        } catch (error) {}
    };

    return (
        <div className="register-wrapper">
            <RegisterForm onSubmit={handleSubmit} onClick={onClick} />
        </div>
    );
}

export default Register;

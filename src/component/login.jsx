

import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [theme, setTheme] = useState('Light');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.trim() === '' || password.trim() === '') {
            setErrorMessage('Please fill in all the fields');
            return;
        }
    };

    const handleClick = () => {
        const loginForm = document.getElementsByClassName('login-form')[0];
        loginForm.classList.toggle(theme);

        if (theme === 'Light') {
            setTheme('Dark');

        } else if (theme === 'Dark') {
            setTheme('Light');
        }
    };

    return (
        <div className={`login-form ${theme}`}>
            {errorMessage && <p>{errorMessage}</p>}
            <button onClick={handleClick}>
                {theme === 'Light' ? 'Dark' : 'Light'}
            </button>


            <label>Email Address</label>
            <input
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
                type="password"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>
                SUBMIT
            </button>
        </div>
    );
};

export default Login;

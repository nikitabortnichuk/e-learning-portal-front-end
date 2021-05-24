import apiUrl from '../config/config';
import { authHeader } from '../auth/helpers';

export const userService = {
    login,
    register,
    update,
    logout,
    getByUsername
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }

    return fetch(`${apiUrl}/auth/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user))
        });
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${apiUrl}/auth/register`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user))
            console.log(user)
        })
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);
}

function logout() {
    localStorage.removeItem('user');
}

function getByUsername(username) {
    const requestOptions = {
        method: 'GET',
        mode: 'no-cors',
        headers: { ...authHeader(), 'Content-Type': 'application/json'}
    };
    console.log(username);
    return fetch(`${apiUrl}/users/user-data`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        console.log(text)
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    }
    )
}
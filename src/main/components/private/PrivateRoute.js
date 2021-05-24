import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { history } from '../../model/helpers/history';

function redirect() {
    history.push('/courses?' + new URLSearchParams({ auth: 'login' }).toString())
    history.go(0)
}

export const PrivateRoute = ({ component: Component, ...rest }) =>
    (
        <Route {...rest} render={props => (
            localStorage.getItem('user')
                ? <Component {...props} />
                : redirect()
        )} />
    )
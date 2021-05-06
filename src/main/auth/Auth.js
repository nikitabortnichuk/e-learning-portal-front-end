import './Auth.css'

import {
    BrowserRouter as Router,
} from "react-router-dom";
import { Component } from 'react';
import Login from './login/Login';
import Register from './register/Register';

const Authlinks = () => {
    return (
        <ul className="nav-links">
            <li className="nav-item"><a className="link navbar-link active" href="?auth=login">Log in</a></li>
            <li className="nav-item"><a className="link navbar-link active" href="?auth=register">Register</a></li>
        </ul>
    )
}

class Auth extends Component {
    constructor(props) {
        super();
        this.state = {
            isVisible: true,
            authQuery: props.auth
        };
        this.onClose = this.onClose.bind(this);
    }

    onClose() {
        this.setState({ isVisible: !this.state.isVisible });
    }

    render() {
        const isVisible = this.state.isVisible
        const authQuery = this.state.authQuery

        const Authblock = () => {
            return (
                <Router>
                    <div className="auth-out" onClick={this.onClose}></div>
                    <div className="auth-in">
                        <header className="auth-header">
                            <Authlinks />
                            <div className="vertical-divider"></div>
                        </header>
                        {authQuery === 'login' && <Login />}
                        {authQuery === 'register' && <Register />}
                        <div className="auth-close" onClick={this.onClose}>
                            <svg id="modal-button-close" viewBox="0 0 16 16">
                                <g fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M2 14L14 2M2 2l12 12"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </Router>
            )
        }

        return (
            <div>
                { isVisible && <Authblock />}
            </div>
        )
    }
}

export default Auth;
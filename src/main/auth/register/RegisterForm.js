import '../login/LoginForm.css'
import { Component } from "react";

class RegisterForm extends Component {
    render() {
        return (
            <div className="form-wrap">
                <div className="center-form">
                    <form className="login-form" autoComplete="on" >
                        <label className="login-label-hidden" for="id-login-full-name">Full name</label>
                        <input className="login-form-input"
                            name="full_name"
                            autoComplete="name"
                            spellCheck="true"
                            placeholder="Full name"
                            id="id-login-full-name"
                            autoFocus
                            required />
                        <label className="login-label-hidden" for="id-login-email">E-mail</label>
                        <input className="login-form-input"
                            name="email"
                            autoComplete="email"
                            spellCheck="true"
                            placeholder="E-mail"
                            id="id-login-email"
                            autoFocus
                            required />
                        <label className="login-label-hidden" for="id-login-password">Password</label>
                        <input className="login-form-input"
                            name="password"
                            autoComplete="password"
                            spellCheck="true"
                            placeholder="Password"
                            id="id-login-password"
                            autoFocus
                            required />

                        <button className="login-form-button">Register</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default RegisterForm
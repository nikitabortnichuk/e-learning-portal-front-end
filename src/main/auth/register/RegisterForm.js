import '../login/LoginForm.css'
import { Component } from "react";
import { connect } from 'react-redux';

import { userActions } from '../../model/actions/user/UserActions';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                surname: '',
                username: '',
                email: '',
                password: '',
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.name && user.surname && user.username && user.email && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const { user } = this.state;
        return (
            <div className="form-wrap">
                <div className="center-form">
                    <form className="login-form" autoComplete="on" onSubmit={this.handleSubmit}>
                        <label className="login-label-hidden" for="id-login-name">Name</label>
                        <input className="login-form-input"
                            name="name"
                            autoComplete="name"
                            spellCheck="true"
                            placeholder="Name"
                            id="id-login-name"
                            value={user.name}
                            onChange={this.handleChange}
                            autoFocus
                            required />
                        <label className="login-label-hidden" for="id-login-surname">Surname</label>
                        <input className="login-form-input"
                            name="surname"
                            autoComplete="name"
                            spellCheck="true"
                            placeholder="Surname"
                            id="id-login-surname"
                            value={user.surname}
                            onChange={this.handleChange}
                            autoFocus
                            required />
                        <label className="login-label-hidden" for="id-login-email">E-mail</label>
                        <input className="login-form-input"
                            name="email"
                            autoComplete="email"
                            spellCheck="true"
                            placeholder="E-mail"
                            id="id-login-email"
                            value={user.email}
                            onChange={this.handleChange}
                            autoFocus
                            required />
                        <label className="login-label-hidden" for="id-login-username">Username</label>
                        <input className="login-form-input"
                            name="username"
                            autoComplete="name"
                            spellCheck="true"
                            placeholder="Username"
                            id="id-login-username"
                            value={user.username}
                            onChange={this.handleChange}
                            autoFocus
                            required />
                        <label className="login-label-hidden" for="id-login-password">Password</label>
                        <input className="login-form-input"
                            name="password"
                            type="password"
                            autoComplete="password"
                            spellCheck="true"
                            placeholder="Password"
                            id="id-login-password"
                            value={user.password}
                            onChange={this.handleChange}
                            autoFocus
                            required />

                        <button className="login-form-button">Register</button>
                    </form>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const RegisterPage = connect(mapState, actionCreators)(RegisterForm);

export default RegisterPage;
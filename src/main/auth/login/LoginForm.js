import './LoginForm.css'
import { Component } from "react";
import { connect } from 'react-redux';
import { userActions } from '../../model/actions/user/UserActions';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
                username: '',
                password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        const { username, password } = this.state;
        return (
            <div className="form-wrap">
                <div className="center-form">
                    <form className="login-form" autoComplete="on" onSubmit={this.handleSubmit}>
                        <label className="login-label-hidden" for="id-login-username">Ім'я користувача</label>
                        <input className="login-form-input"
                            name="username"
                            autoComplete="name"
                            spellCheck="true"
                            placeholder="Username"
                            id="id-login-username"
                            value={username}
                            onChange={this.handleChange}
                            autoFocus
                            required />
                        <label className="login-label-hidden" for="id-login-password">Пароль</label>
                        <input className="login-form-input"
                            name="password"
                            type="password"
                            autoComplete="password"
                            spellCheck="true"
                            placeholder="Password"
                            id="id-login-password"
                            value={password}
                            onChange={this.handleChange}
                            autoFocus
                            required />

                        <button className="login-form-button">Увійти</button>
                    </form>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.login;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
};

const LoginPage = connect(mapState, actionCreators)(LoginForm);

export default LoginPage
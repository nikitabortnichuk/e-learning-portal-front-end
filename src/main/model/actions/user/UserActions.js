import { userService } from "../../../service/user/UserService"
import { userConstants } from "../../constants/UserConstants"
import { history } from '../../helpers/history'

export const userActions = {
    login,
    logout,
    register,
    getByUsername
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }))

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.goBack();
                    history.replace ({
                        search : ''
                    })
                },
                error => {
                    dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    }

    function request(user) { return { type: userConstants, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success(user));
                    history.goBack();
                    history.replace ({
                        search : ''
                    })
                    // dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function logout() {
    userService.logout();
    history.go(0);
    return { type: userConstants.LOGOUT };
}

function getByUsername(username) {
    return dispatch => {
        dispatch(request());

        userService.getByUsername(username)
            .then(
                user => dispatch(success(user)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETBYUSERNAMEL_REQUEST } }
    function success(user) { return { type: userConstants.GETBYUSERNAME_SUCCESS, user } }
    function failure(error) { return { type: userConstants.GETBYUSERNAME_FAILURE, error } }
}
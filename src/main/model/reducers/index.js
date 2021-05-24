import { combineReducers } from 'redux';
import { login } from './LoginReducer'
import { registration } from './RegisterReducer';
import { users } from './UsersReducer';
import { courses } from './CoursesReducer';

const rootReducer = combineReducers({
    login,
    registration,
    users,
    courses
});

export default rootReducer;
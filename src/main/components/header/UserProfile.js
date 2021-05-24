import './Header.css'
import React from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import { history } from '../../model/helpers/history';
import { userActions } from '../../model/actions/user/UserActions';
import { connect } from 'react-redux';

function handleLogoClick(event, onClick) {
    event.preventDefault();
    onClick(event);
}

const UserLogo = React.forwardRef(({ children, onClick }, ref) => (
    <div className="profile-logo" ref={ref} onClick={e => handleLogoClick(e, onClick)}>
        {children}
    </div>
));

const UserProfile = ({ user }) => {
    const firstLetter = user.username.charAt(0);
    return (
        <div className="user-profile">
            <Dropdown>
                <Dropdown.Toggle as={UserLogo}>{firstLetter}</Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="" onClick={userActions.logout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

function mapState(state) {
    const { loggingIn } = state.login;
    return { loggingIn };
}

const actionCreators = {
    logout: userActions.logout
};

const UserProfileHeader = connect(mapState, actionCreators)(UserProfile);

export default UserProfileHeader;
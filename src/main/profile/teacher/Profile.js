import { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { PrivateRoute } from '../components/private/PrivateRoute';
import { Description, Courses, Wishlist, Certificates } from './Components';
import { userActions } from '../model/actions/user/UserActions';
import './Profile.css'

class ProfilePage extends Component {

    // componentDidMount() {
    //     const user = JSON.parse(localStorage.getItem('user'));
    //     this.props.getByUsername(user.username);
    // }

    render() {
        return (
            <div className="profile">
                <div className="profile-header-wrapper">
                    <div className="profile-header">
                        <div className="profile-header-logo">
                            НБ
                        </div>
                        <div className="profile-header-info">
                            <h2 className="profile-username">Нікіта Бортнчіук</h2>
                            <p className="profile-description">Студент</p>
                        </div>
                    </div>.
                </div>
                <div className="profile-body">
                    <div className="profile-nav">
                        <ul className="profile-nav-links">
                            <div className="top">
                                <li><a className="profile-nav-link" href="/profile/description">Опис</a></li>
                                <li><a className="profile-nav-link" href="/profile/mycourses">Мої курси</a></li>
                                <li><a className="profile-nav-link" href="/profile/wishlist">Список бажань</a></li>
                                <li><a className="profile-nav-link active" href="/profile/certificates">Сертифікати</a></li>
                            </div>
                            <li className="logout"><a className="profile-nav-link" href="#">Вийти</a></li>
                        </ul>
                    </div>
                    <div className="profile-content">
                        <Route exact path={this.props.match.path}><Description /></Route>
                        <Route path={`${this.props.match.path}/description`} ><Description /></Route>
                        <Route path={`${this.props.match.path}/mycourses`} ><Courses /></Route>
                        <Route path={`${this.props.match.path}/wishlist`} ><Wishlist /></Route>
                        <Route path={`${this.props.match.path}/certificates`} ><Certificates /></Route>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { user } = state;
    return { user };
}

const actionCreators = {
    getByUsername: userActions.getByUsername
}

const Profile = connect(mapState, actionCreators)(ProfilePage);

export default Profile
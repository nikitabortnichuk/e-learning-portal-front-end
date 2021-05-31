import { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { userActions } from "../../model/actions/user/UserActions";
import { Courses, Description, CreateCourse, UnpublishedCourses } from "./TeacherComponents";
import './../Profile.css'
import { PrivateRoute } from "../../components/private/PrivateRoute";
import TeacherCourseDetails from "./course/TeacherCourseDetails";
import ChangePassword from "./settings/ChangePassord";
import AddLesson from "./course/addlesson/AddLesson";

class TeacherProfilePage extends Component {

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
                            ОШ
                        </div>
                        <div className="profile-header-info">
                            <h2 className="profile-username">Орест Шемелюк</h2>
                            <p className="profile-description">Вчитель</p>
                        </div>
                    </div>.
                </div>
                <div className="profile-body">
                    <div className="profile-nav">
                        <ul className="profile-nav-links">
                            <div className="top">
                                <li><a className="profile-nav-link" href="/profile-teacher/description">Опис</a></li>
                                <li><a className="profile-nav-link" href="/profile-teacher/mycourses">Опубліковані курси</a></li>
                                <li><a className="profile-nav-link" href="/profile-teacher/unpublished-courses">Неопубліковані курси</a></li>
                                <li><a className="profile-nav-link" href="/profile-teacher/create/course">Створити курс</a></li>
                            </div>
                            <div className="bottom">
                                <li><a className="profile-nav-link" href="/profile-teacher/change-password">Змінити пароль</a></li>
                                <li><a className="profile-nav-link" href="#">Вийти</a></li>
                            </div>
                        </ul>
                    </div>
                    <div className="profile-content">
                        <Route exact path={this.props.match.path}><Description /></Route>
                        <Route path={`${this.props.match.path}/description`} ><Description /></Route>
                        <Route path={`${this.props.match.path}/mycourses`} ><Courses /></Route>
                        <Route path={`${this.props.match.path}/unpublished-courses`} ><UnpublishedCourses /></Route>
                        <Route path={`${this.props.match.path}/create/course`} ><CreateCourse /></Route>
                        <Route path={`${this.props.match.path}/course/:courseid/add-lesson`} ><AddLesson /></Route>
                        <Route path={`${this.props.match.path}/course/:courseid`} component={TeacherCourseDetails} />
                        <Route path={`${this.props.match.path}/change-password`} component={ChangePassword} />
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

const TeacherProfile = connect(mapState, actionCreators)(TeacherProfilePage);

export default TeacherProfile
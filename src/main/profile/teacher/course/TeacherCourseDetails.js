import { Component } from "react";
import { Button } from "react-bootstrap";
import "../../Profile.css"
import "./TeacherCourseDetails.css"


class TeacherCourseDetails extends Component {

    render() {
        return (
            <div className="profile-content-item">
                <h4 className="item-title">Курс</h4>
                <div className="profile-header row">
                    <div className="col-4">
                        <img className="teacher-course-image" src="https://cs11.pikabu.ru/post_img/2018/05/15/8/1526388622116866159.png" />
                    </div>
                    <div className="col-6">
                        <p className="course-title">
                            Введення програмування
                        </p>
                    </div>
                    <div className="col-2">
                        <Button variant="primary" className="edit-course-button">Правити курс</Button>
                    </div>
                </div>
                <div className="course-description">
                    <p className="teacher-course-title-item">Опис</p>
                    <p>Програма курсу на базовому рівні висвітлює практичні основи програмування. В ході навчання треба буде розв'язати безліч невеликих завдань, що охоплюють основні базові конструкції мови C ++. Такий досвід буде корисний всім, хто хоче заглибитися у вивчення програмування.</p>
                </div>
                <div className="course-lessons">
                    <p className="teacher-course-title-item">Уроки</p>
                    <label className="lessons-list-item"><a className="lesson-link" href={`profile-teacher/course/25/lesson/26`}>1. Вступне заняття</a></label>
                    <label className="lessons-list-item"><a className="lesson-link" href={`profile-teacher/course/25/lesson/26`}>2. Знайомство з середовищем розробки</a></label>
                    <label className="lessons-list-item"><a className="lesson-link" href={`profile-teacher/course/25/lesson/26`}>3. Цілі числа</a></label>
                    <div>
                        <Button variant="success" href={`/profile-teacher/course/25/add-lesson`} className="add-lesson-button">Додати урок</Button>
                    </div>
                </div>
                <div className="students-list">
                    <p className="teacher-course-title-item">Список студентів</p>
                    <a className="student-list-link" href="profile-teacher/course/25/student-list">Показати список студентів</a>
                </div>
            </div>
        )
    }
}

export default TeacherCourseDetails
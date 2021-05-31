import { Button, Card, Form } from 'react-bootstrap'
import './../Profile.css'
import './TeacherProfile.css'

const Description = () => {
    return (
        <div className="profile-content-item profile-descritpion">
            <h4 className="item-title">Опис</h4>
            <div className="row">
                <div className="profile-description-title col-md-6">
                    <label>Id:</label>
                </div>
                <div className="col-md-6">
                    <label>113</label>
                </div>
            </div>
            <div className="row">
                <div className="profile-description-title col-md-6">
                    <label>Ім'я користувача:</label>
                </div>
                <div className="col-md-6">
                    <label>teacher113</label>
                </div>
            </div>
            <div className="row">
                <div className="profile-description-title col-md-6">
                    <label>Email:</label>
                </div>
                <div className="col-md-6">
                    <label>o.shem@gmail.com</label>
                </div>
            </div>
            <div className="row">
                <div className="profile-description-title col-md-6">
                    <label>Телефон:</label>
                </div>
                <div className="col-md-6">
                    <label>+380950725105</label>
                </div>
            </div>
        </div>
    )
}

const Courses = () => {
    return (
        <div className="profile-content-item my-courses">
            <h4 className="item-title">Опубліковані курси</h4>
            <a href="/profile-teacher/course/25">
                <Card>
                    <div className="card-horizontal">
                        <Card.Img className="course-image" variant="left" src="https://cs11.pikabu.ru/post_img/2018/05/15/8/1526388622116866159.png" />
                        <Card.Body className="d-flex">
                            <div className="course-info">
                                <Card.Title className="course-name">Введення в програмування</Card.Title>
                                <Card.Text className="course-description">Програма курсу на базовому рівні висвітлює практичні основи...</Card.Text>
                            </div>
                        </Card.Body>
                    </div>
                </Card>
            </a>
        </div>
    )
}

const UnpublishedCourses = () => {
    return (
        <div className="profile-content-item my-courses">
            <h4 className="item-title">Неопубліковані курси</h4>
            <p>У вас немає опублікованих курсів</p>
        </div>
    )
}

const CreateCourse = () => {
    return (
        <div className="create-course">
            <h4 className="item-title">Створити курс</h4>
            <Form>
                <Form.Group className="create-course-form-input" controlId="exampleForm.ControlInput1">
                    <Form.Label>Назва</Form.Label>
                    <Form.Control type="text" placeholder="напр. Javascript і React" />
                </Form.Group>
                <Form.Group className="create-course-form-input">
                    <Form.Label>Головне зображення</Form.Label>
                    <Form.File id="exampleForm.ControlFile" />
                </Form.Group>
                <Form.Group className="create-course-form-input" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Опис</Form.Label>
                    <Form.Control as="textarea" rows={5} />
                </Form.Group >
                <Button variant="primary" type="submit">
                    Створити
            </Button>
            </Form>
        </div>
    )
}

export {
    Description,
    Courses,
    CreateCourse,
    UnpublishedCourses
}
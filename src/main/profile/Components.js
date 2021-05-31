import { Button, Card } from 'react-bootstrap'
import './Profile.css'

const Description = () => {
    return (
        <div className="profile-content-item profile-descritpion">
            <h4 className="item-title">Опис</h4>
            <div className="row">
                <div className="profile-description-title col-md-6">
                    <label>Id:</label>
                </div>
                <div className="col-md-6">
                    <label>59</label>
                </div>
            </div>
            <div className="row">
                <div className="profile-description-title col-md-6">
                    <label>Ім'я користувача:</label>
                </div>
                <div className="col-md-6">
                    <label>NikitaNikita</label>
                </div>
            </div>
            <div className="row">
                <div className="profile-description-title col-md-6">
                    <label>Email:</label>
                </div>
                <div className="col-md-6">
                    <label>nikita@nikita.com</label>
                </div>
            </div>
            <div className="row">
                <div className="profile-description-title col-md-6">
                    <label>Телефон:</label>
                </div>
                <div className="col-md-6">
                    <label>+380930613483</label>
                </div>
            </div>
        </div>
    )
}

const Courses = () => {
    return (
        <div className="profile-content-item my-courses">
            <h4 className="item-title">Мої курси</h4>
            <Card>
                <div className="card-horizontal">
                    <Card.Img className="course-image" variant="left" src="https://cs11.pikabu.ru/post_img/2018/05/15/8/1526388622116866159.png" />
                    <Card.Body className="d-flex">
                        <div className="course-info">
                            <Card.Title className="course-name">Введення в программування</Card.Title>
                            <Card.Text className="course-description">Програма курсу на базовому рівні висвітлює практичні основи...</Card.Text>
                        </div>
                        <div className="course-learn-button">
                            <Button variant="primary">Вчити</Button>
                        </div>
                    </Card.Body>
                </div>
            </Card>
        </div>
    )
}

const Wishlist = () => {
    return (
        <div className="profile-content-item wishlist">
            <h4 className="item-title">Список бажань</h4>
            <Card>
                <div className="card-horizontal">
                    <Card.Img className="course-image" variant="left" src="https://kotlinlang.org/assets/images/open-graph/kotlin_250x250.png" />
                    <Card.Body className="d-flex">
                        <div className="course-info">
                            <Card.Title className="course-name">Kotlin</Card.Title>
                            <Card.Text className="course-description">Kotlin - це сучасна статично набрана мова програмування для JVM, Android та ...</Card.Text>
                        </div>
                        <div className="course-learn-button">
                            <Button variant="primary">Приєднатись до цього курсу</Button>
                        </div>
                    </Card.Body>
                </div>
            </Card>
        </div>
    )
}

const Certificates = () => {
    return (
        <div className="profile-content-item certificates">
            <h4 className="item-title">Сертифікати</h4>
            <div className="certificates-content">
                <p>У вас ще немає сертифікатів</p>
            </div>
        </div>
    )
}

export {
    Description,
    Courses as ProfileCourses,
    Wishlist,
    Certificates
}
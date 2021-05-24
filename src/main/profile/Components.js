import { Button, Card } from 'react-bootstrap'
import './Profile.css'

const Description = () => {
    return (
        <div className="profile-content-item profile-descritpion">
            <h4 className="item-title">Description</h4>
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
                    <label>Username:</label>
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
                    <label>Phone:</label>
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
            <h4 className="item-title">My courses</h4>
            <Card>
                <div className="card-horizontal">
                    <Card.Img className="course-image" variant="left" src="https://kotlinlang.org/assets/images/open-graph/kotlin_250x250.png" />
                    <Card.Body className="d-flex">
                        <div className="course-info">
                            <Card.Title className="course-name">Kotlin</Card.Title>
                            <Card.Text className="course-description">Kotlin is the modern statically typed programming language for the JVM, Android and the...</Card.Text>
                        </div>
                        <div className="course-learn-button">
                            <Button variant="primary">Learn</Button>
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
        <h4 className="item-title">Wishlist</h4>
        <Card>
            <div className="card-horizontal">
                <Card.Img className="course-image" variant="left" src="https://cs11.pikabu.ru/post_img/2018/05/15/8/1526388622116866159.png" />
                <Card.Body className="d-flex">
                    <div className="course-info">
                        <Card.Title className="course-name">Введение в программирование</Card.Title>
                        <Card.Text className="course-description">Программа курса на базовом уровне освещает практические основы...</Card.Text>
                    </div>
                    <div className="course-learn-button">
                        <Button variant="primary">Start</Button>
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
            <h4 className="item-title">Certificates</h4>
            <div className="certificates-content">
                <p>You don't have any certificates yet.</p>
            </div>
        </div>
    )
}

export {
    Description,
    Courses,
    Wishlist,
    Certificates
}
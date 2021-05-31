import React from "react";
import { Component } from "react";
import { Button, Dropdown } from "react-bootstrap";
import './Lesson.css'


class Lesson extends Component {

    render() {
        return (
            <div className="lesson">
                <div className="lesson-header">
                    <div className="container">
                        <p className="lesson-title">1.1 Hello, world!</p>
                    </div>
                </div>
                <div className="lesson-content">
                    <div className="lesson-description row">
                        <div className="col-4">
                            <img className="lesson-image" src="https://kotlinlang.org/assets/images/twitter-card/kotlin_800x320.png" />
                        </div>
                        <div className="col-8">
                            <h3>Description</h3>
                            <p className="lesson-text">
                                Погляньте на синтаксис функції та змусіть функцію start повернути рядок "OK". У завданнях використовується функція TODO (), яка видає виняток. Вашою роботою під час коанів буде заміна цієї функції виклику значущим кодом відповідно до проблеми.
                            </p>
                        </div>
                    </div>
                    <div className="lesson-video-wrapper">
                        <iframe className="lesson-video" src="https://www.youtube.com/embed/DhRIBJ6q8Ks" />
                    </div>
                </div>
                <div className="lesson-footer-wrapper">
                    <div className="lesson-footer container">
                        <div className="row">
                            <div className="lesson-hometask col-6">
                                <Dropdown>
                                    <Dropdown.Toggle as={AddHometaskButtom} />

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/lesson/32/add-file">Файл</Dropdown.Item>
                                        <Dropdown.Item href="/lesson/32/add-link">Посилання</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="next-lesson-button col-6">
                                <Button className="lesson-next-button" size="lg" variant="success">До наступного уроку</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const AddHometaskButtom = React.forwardRef(({ onClick }, ref) => (
    <Button className="lesson-hometask-button" size="lg" variant="info" ref={ref} onClick={e => handleLogoClick(e, onClick)}>
        Add hometask
    </Button>
))

function handleLogoClick(event, onClick) {
    event.preventDefault();
    onClick(event);
}

export default Lesson
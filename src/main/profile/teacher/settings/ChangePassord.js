import { Component } from "react";
import { Button, Form } from "react-bootstrap";
import "../../Profile.css"

class ChangePassword extends Component {
    render() {
        return (
            <div className="profile-content-item change-password">
                <h4 className="item-title">Змінити пароль</h4>
                <Form>
                    <Form.Group controlId="oldPassword">
                        <Form.Label>Старий пароль</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Form.Group controlId="newPassword">
                        <Form.Label>Новий пароль</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Form.Group controlId="confirmPassword">
                        <Form.Label>Підтвердити пароль</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Зберегти
                    </Button>
                </Form>
            </div>
        )
    }
}

export default ChangePassword
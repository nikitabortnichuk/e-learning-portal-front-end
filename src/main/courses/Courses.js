import { Component } from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { courseActions } from '../model/actions/course/CourseActions';
import { history } from '../model/helpers/history';
import { withRouter } from "react-router-dom";
import './Courses.css'

class CoursesPage extends Component {

    componentDidMount() {
        this.props.getAll()
    }

    render() {
        const { courses } = this.props

        return (
            <Row>
                <div className="courses container">
                    <h1 className="courses-title">Курси</h1>
                    <div className="divider"></div>
                    {courses.items &&
                        <ul className="courses-list row">
                            {courses.items.map((course, index) =>
                                <li className="col-sm-3" key={index}>
                                    <a href={`course/${course.id}/promo`}>
                                        <Card className="shadow p-3 mb-5 bg-white rounded">
                                            <Card.Img className="course-image" variant="top" src={course.photoPreview} />
                                            <Card.Body className="course-card-body">
                                                <Card.Title className="course-name">{course.name}</Card.Title>
                                                <Card.Text className="course-description">{course.description}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </a>
                                </li>
                            )}
                        </ul>
                    }
                </div>
            </Row>
        );
    }
}

function mapState(state) {
    const { courses } = state;
    return { courses };
}

const actionCreators = {
    getAll: courseActions.getAll
}

const Courses = connect(mapState, actionCreators)(CoursesPage);

export default withRouter(Courses)
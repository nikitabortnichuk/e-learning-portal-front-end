import { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { courseActions } from "../../model/actions/course/CourseActions";
import "./CourseDetails.css"


class CourseDetailsPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            courseId: props.match.params
        }
    }

    componentDidMount() {
        const { courseId } = this.state.courseId
        // this.props.getCourseById(courseId)
    }

    render() {
        return (
            <div className="course-details">
                <div className="course-details-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-10">
                                <h1 className="course-title">
                                    Kotlin
                                </h1>
                                <div className="course-description">
                                    <p>
                                        Kotlin - це сучасна статично визначена мова програмування для JVM, Android та браузера. Це стисло, безпечно та універсально. Код Kotlin можна скомпілювати в байт-код JVM, JavaScript або безпосередньо в власний машинний код.
                                    </p>
                                </div>
                            </div>
                            <div className="col-2">
                                <img className="course-image" src="https://kotlinlang.org/assets/images/open-graph/kotlin_250x250.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="course-details-body">
                    <div className="container">
                        <div className="row">
                            <div className="course-lessons col-10">
                                <p className="lessons-list-title">Уроки: </p>
                                <div className="lessons-list">
                                    <label className="lessons-list-item"><a className="lesson-link" href={`/lesson/32`}>- 1.1 Hello, world!</a></label>
                                    <label className="lessons-list-item"><a className="lesson-link" href={`/lesson/32`}>- 1.2 Конвертація Java в котлін</a></label>
                                    <label className="lessons-list-item"><a className="lesson-link" href={`/lesson/32`}>- 1.3 Іменовані параметри</a></label>
                                </div>
                            </div>
                            <div className="col-2">
                                <Button variant="success" size="lg" className="course-learn-button" href="#">Приєднатись до курсу</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapState(state) {
    const { course } = state;
    return { course };
}

const actionCreators = {
    getAll: courseActions.getCourseById
}

const CourseDetails = connect(mapState, actionCreators)(CourseDetailsPage);

export default CourseDetails
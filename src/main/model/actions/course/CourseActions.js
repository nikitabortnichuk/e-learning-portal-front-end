import { courseService } from "../../../service/course/CourseService";
import { coursesConstants } from "../../constants/CoursesConstants";

export const courseActions = {
    getAll
}

function getAll() {
    return dispatch => {
        dispatch(request());

        courseService.getAllCourses()
            .then(
                courses => dispatch(success(courses)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: coursesConstants.GETALL_REQUEST } }
    function success(courses) { return { type: coursesConstants.GETALL_SUCCESS, courses } }
    function failure(error) { return { type: coursesConstants.GETALL_FAILURE, error } }
}
import { Switch, Route } from "react-router"
import CourseDetails from "../../courses/coursedetails/CourseDetails";
import Courses from '../../courses/Courses';
import Lesson from "../../courses/lesson/Lesson";
import { Certificates, Wishlist, ProfileCourses, Description } from "../../profile/Components";
import Profile from "../../profile/Profile";
import TeacherProfile from "../../profile/teacher/TeacherProfile";
import Teach from '../../teach/Teach';
import { PrivateRoute } from "../private/PrivateRoute";

const Switcher = () => {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/"><Courses /></Route>
                <Route path="/courses"><Courses /></Route>
                <Route path="/course/:id/promo" component={CourseDetails} />
                <Route path="/lesson/:id" component={Lesson} />
                <Route path="/teach"><Teach /></Route>
                <PrivateRoute path="/profile" component={Profile} />
                <Route path="/profile/description" ><Description /></Route>
                <Route path="/profile/mycourses" ><ProfileCourses /></Route>
                <Route path="/profile/wishlist" ><Wishlist /></Route>
                <Route path="/profile/certificates" ><Certificates /></Route>
                <PrivateRoute path="/profile-teacher" component={TeacherProfile} />
            </Switch>
        </div>
    )
}

export default Switcher
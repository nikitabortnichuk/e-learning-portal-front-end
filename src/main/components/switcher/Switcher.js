import { Switch, Route } from "react-router"
import CourseDetails from "../../courses/coursedetails/CourseDetails";
import Courses from '../../courses/Courses';
import Profile from "../../profile/Profile";
import Teach from '../../teach/Teach';
import { PrivateRoute } from "../private/PrivateRoute";

const Switcher = () => {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/"><Courses /></Route>
                <Route path="/courses"><Courses /></Route>
                <Route path="/course/:id/promo" component={CourseDetails} />
                <Route path="/teach"><Teach /></Route>
                <PrivateRoute path="/profile" component={Profile} />
            </Switch>
        </div>
    )
}

export default Switcher
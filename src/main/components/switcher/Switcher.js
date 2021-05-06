import { Switch, Route } from "react-router"
import Courses from '../../courses/Courses';
import Teach from '../../teach/Teach';

const Switcher = () => {
    return (
        <div className="container">
            <Switch>
                <Route path="/courses">
                    <Courses />
                </Route>
                <Route path="/teach">
                    <Teach />
                </Route>
            </Switch>
        </div>
    )
}

export default Switcher
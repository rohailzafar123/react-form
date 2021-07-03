import {
    Signup,
} from "../pages/signup";
import {
    Confirmation,
} from "../pages/Confirmation";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

// import "./App.css";

function App() {
    const history = createBrowserHistory();

    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Signup} />
                    <Route exact path="/Confirmation" component={Confirmation} />

                </Switch>
            </Router>
        </div>
    );
}

export default App;

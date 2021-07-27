import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./screens/home";
import UserForm from "./screens/userform";
import ViewUser from "./screens/viewuser";

function App() {
  return (
    <div className="main-body">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home">
              <Home />
            </Redirect>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/userform">
            <UserForm />
          </Route>

          <Route exact path="/userform/:id" component={UserForm} />

          <Route path="/viewuser">
            <ViewUser />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

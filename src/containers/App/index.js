import AppBar from "material-ui/AppBar";
import React from "react";
import Loadable from "react-loadable";
import { Link, Route, Switch } from "react-router-dom";
import loading from "../../components/Loading";
import ic_home_white_24px from "../../icons/ic_apps_black_24px.svg";
import ic_face_black_24px from "../../icons/ic_face_black_24px.svg";
import ic_grade_black_24px from "../../icons/ic_grade_black_24px.svg";
import About from "../About";
import RequireAuth from "../auth";
import HomePage from "../Home";
import SigninPage from "../signin-page";
import SignupPage from "../signup-page";

const RolePage = Loadable({
  loader: () => import("../Roles/index"),
  loading
});

const GoalsPage = Loadable({
  loader: () => import("../goals-page"),
  loading
});

const AddGoalsPage = Loadable({
  loader: () => import("../AddGoalsPage"),
  loading
});

const AddRolesPage = Loadable({
  loader: () => import("../AddRolesPage"),
  loading
});

const App = () => (
  <div>
    <AppBar id="app-navigation">
      <Link to="/">
        <img src={ic_home_white_24px} alt="home icon" />
      </Link>
      {/* <Link to="/about-us">About</Link> TODO: Find a place to put this link */}
      <Link to="/roles">
        <img src={ic_face_black_24px} alt="roles icon" />
      </Link>
      <Link to="/goals">
        <img src={ic_grade_black_24px} alt="goals icon" />
      </Link>
    </AppBar>
    <main>
      <Switch>
        <Route exact path="/about-us" component={About} />
        <Route exact path="/goals/add" component={RequireAuth(AddGoalsPage)} />
        <Route exact path="/goals" component={RequireAuth(GoalsPage)} />
        <Route exact path="/roles/add" component={RequireAuth(AddRolesPage)} />
        <Route exact path="/roles" component={RequireAuth(RolePage)} />
        <Route exact path="/signin" component={SigninPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/" component={RequireAuth(HomePage)} />
      </Switch>
    </main>
  </div>
);

export default App;

import { Link, Route, Switch } from 'react-router-dom';

import About from '../About';
import AddGoalsPage from '../add-goals-page';
import AddRolesPage from '../Add-Roles-Page';
// import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import GoalsPage from '../goals-page';
// import Home from '../Home';
import React from 'react';
import RolePage from '../Roles';
import SigninPage from '../signin-page';
import SignupPage from '../signup-page';
import ic_face_black_24px from '../../icons/ic_face_black_24px.svg';
import ic_grade_black_24px from '../../icons/ic_grade_black_24px.svg';
import ic_home_white_24px from '../../icons/ic_apps_black_24px.svg';
import RequireAuth  from '../auth';
const App = () => (
  <div>
    <AppBar id="app-navigation">
      <Link to="/"><img src={ic_home_white_24px} alt="home icon" /></Link>
      {/* <Link to="/about-us">About</Link> TODO: Find a place to put this link */}
      <Link to="/roles"><img src={ic_face_black_24px} alt="roles icon" /></Link>
      <Link to="/goals"><img src={ic_grade_black_24px} alt="goals icon" /></Link>
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
        <Route exact path="/" component={SigninPage} />
      </Switch>
    </main>
  </div>
);

export default App;

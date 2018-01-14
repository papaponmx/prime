import { Route, Link, Switch } from 'react-router-dom';
import React from 'react';
// import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import About from '../About';
import Home from '../Home';
import AddRolesPage from '../Add-Roles-Page';
import AddGoalsPage from '../add-goals-page';
import GoalsPage from '../goals-page';
import RolePage from '../Roles';

import ic_home_white_24px from '../../icons/ic_apps_black_24px.svg';
import ic_face_black_24px from '../../icons/ic_face_black_24px.svg';
import ic_grade_black_24px from '../../icons/ic_grade_black_24px.svg';

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
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/goals/add" component={AddGoalsPage} />
        <Route exact path="/goals" component={GoalsPage} />
        <Route exact path="/roles/add" component={AddRolesPage} />
        <Route exact path="/roles" component={RolePage} />
      </Switch>
    </main>
  </div>
);

export default App;

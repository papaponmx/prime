import { Route, Link, Switch } from 'react-router-dom';
// import { withStyles } from 'material-ui/styles';
import About from '../About';
import AppBar from 'material-ui/AppBar';
import Home from '../Home';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import React from 'react';
import RolePage from '../Roles';
import Typography from 'material-ui/Typography';
import AddRolesPage from '../Add-Roles-Page';
import AddGoalsPage from '../add-goals-page';
import GoalsPage from '../goals-page';

const App = () => (
  <div>
    <AppBar>
      <Typography>
        <Link to="/">Home</Link>
        <Link to="/about-us">About</Link>
        <Link to="/roles">Roles</Link>
        <Link to="/goals">Goles</Link>
      </Typography>
      <IconButton color="contrast" aria-label="Menu">
        <MenuIcon />
      </IconButton>
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

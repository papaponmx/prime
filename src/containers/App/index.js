import { Route, Link, Switch } from 'react-router-dom';
// import { withStyles } from 'material-ui/styles';
import About from '../About';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Home from '../Home';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import React from 'react';
import RolePage from '../Roles';
import Typography from 'material-ui/Typography';


const App = () => (
    <div>
      <header>
        <AppBar>
          <Typography>
            <Link to="/">Home</Link>
            <Link to="/about-us">About</Link>
            <Link to="/roles">Roles</Link>
          </Typography>
          <IconButton color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </AppBar>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={About} />
          <Route path="/roles" component={RolePage} />
          </Switch>
        </main>
    </div>
);

export default App;

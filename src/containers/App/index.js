import { Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import Home from '../Home';
import About from '../About';
import RolePage from '../Roles';

const App = () => (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about-us">About</Link>
        <Link to="/roles">Roles</Link>
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

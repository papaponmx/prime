import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import AddRolePage from '../Add-Role-Page';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/add-role">Add Role</Link>
    </header>

    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-us" component={About} />
        <Route path="/add-role" component={AddRolePage} />
    </Switch>
    </main>
  </div>
);

export default App;

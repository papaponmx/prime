import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import AddRole from '../Add-Role';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/add-role">Add Role</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/add-role" component={AddRole}> </Route>
    </main>
  </div>
);

export default App;

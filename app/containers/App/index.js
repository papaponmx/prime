/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from '../LoginPage/Loadable';
import RequireAuth from '../Auth';
import GoalsList from '../GoalsList/Loadable';
import GoalDetailPage from '../GoalDetail/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={RequireAuth(HomePage)} />
        <Route exact path="/goals" component={RequireAuth(GoalsList)} />
        <Route
          exact
          path="/goals/:id"
          component={RequireAuth(GoalDetailPage)}
        />
        <Route exact path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

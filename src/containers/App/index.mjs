import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Loadable from "react-loadable";
import LoginPage from '../LoginPage'
import RequireAuth from '../Auth'
import AboutPage from '../AboutPage'

const AddGoalPage = Loadable({
  loader: () => import("../AddGoalPage"),
  loading() {
    // TODO: Make a HOC out of this
    return <div>Loading...</div>;
  }
});

const GoalsPage = Loadable({
  loader: () => import("../GoalsPage"),
  loading() {
    return <div>Loading...</div>;
  }
});

const GoalDetailPage = Loadable({
  loader: () => import("../GoalDetailPage"),
  loading() {
    return <div>Loading...</div>;
  }
});

const HomePage = Loadable({
  loader: () => import("../HomePage"),
  loading() {
    return <div>Loading...</div>;
  }
});


const App = () => (
  <div>
    <header>
      <Link to='/'> Home</Link>
      <Link to='/about'> About</Link>
      <Link to='/goals/add'>Add Goals</Link>
    </header>
    <main>
      <Switch>
        <Route exact path='/' component={RequireAuth(HomePage)} />
        <Route path='/about' component={AboutPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/goals/add' component={RequireAuth(AddGoalPage)} />
        <Route path='/goals/:id' component={RequireAuth(GoalDetailPage)} />
        <Route path='/goals' component={RequireAuth(GoalsPage)} />
      </Switch>
    </main>
  </div>
)

export default App
// <Route exact path="/roles/add" component={RequireAuth(AddRolesPage)} />
// <Route exact path="/roles" component={RequireAuth(RolePage)} />

import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import HomePage from '../HomePage/index.mjs'
import LoginPage from '../LoginPage'
import RequireAuth from '../Auth'
import AboutPage from '../AboutPage'
import AddGoalPage from '../AddGoalPage'
import GoalsPage from '../GoalsPage'
import GoalDetailPage from '../GoalDetailPage'

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
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/goals/add' component={RequireAuth(AddGoalPage)} />
        <Route exact path='/goals/:id' component={RequireAuth(GoalDetailPage)} />
        <Route exact path='/goals' component={RequireAuth(GoalsPage)} />
      </Switch>
    </main>
  </div>
)

export default App
// <Route exact path="/roles/add" component={RequireAuth(AddRolesPage)} />
// <Route exact path="/roles" component={RequireAuth(RolePage)} />
// <Route exact path="/signup" component={SignupPage} />

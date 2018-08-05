import React from 'react'
import { Route, Link } from 'react-router-dom'
import HomePage from '../HomePage/index.mjs'
import LoginPage from '../LoginPage'
import RequireAuth from '../Auth'
import AboutPage from '../AboutPage'
// import About from '../about'

const App = () => (
  <div>
    <header>
      <Link to='/'> Home
      </Link>
      <Link to='/about'> About
      </Link>
    </header>
    <main>
      <Route exact path='/' component={RequireAuth(HomePage)} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/goals/add' component={RequireAuth(AddGoalsPage)} />
      <Route exact path='/goals' component={RequireAuth(GoalsPage)} />
    </main>
  </div>
)

export default App
// <Route exact path="/roles/add" component={RequireAuth(AddRolesPage)} />
// <Route exact path="/roles" component={RequireAuth(RolePage)} />
// <Route exact path="/signup" component={SignupPage} />

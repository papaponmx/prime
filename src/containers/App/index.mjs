import React from 'react'
import { Route, Link } from 'react-router-dom'
import HomePage from '../HomePage/index.mjs'
import LoginPage from '../LoginPage';
// import About from '../about'

const App = () => (
  <div>
    <header>
      <Link to='/'> Home
      </Link>
      <Link to='/about-us'> About
      </Link>
    </header>
    <main>
    <Route exact path='/' component={HomePage} />
    <Route exact path="/login" component={LoginPage} />
    </main>
    </div>
  )

  export default App;
  // <Route exact path="/about-us" component={About} />
  // <Route exact path="/goals/add" component={RequireAuth(AddGoalsPage)} />
  // <Route exact path="/goals" component={RequireAuth(GoalsPage)} />
  // <Route exact path="/roles/add" component={RequireAuth(AddRolesPage)} />
  // <Route exact path="/roles" component={RequireAuth(RolePage)} />
  // <Route exact path="/signup" component={SignupPage} />
  // <Route exact path="/" component={RequireAuth(HomePage)} />

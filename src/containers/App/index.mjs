import React from 'react'
import { Route, Link } from 'react-router-dom'
import HomePage from '../HomePage/index.mjs'
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
    </main>
  </div>
)

export default App;

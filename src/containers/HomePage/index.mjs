import React, { Component } from 'react'
import GoalsList from '../GoalsList'

export default class HomePage extends Component {
  render () {
    return (
      <section>
        <h1>Home Page</h1>
        <GoalsList />
      </section>
    )
  }
}

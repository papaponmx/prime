import React, { Component } from 'react'
import AddGoalForm from '../../components/add-goal-form';

export default class AddGoalsPage extends Component {
  render() {
    return (
      <div>
        <h1>Add Goals Page</h1>
        <AddGoalForm />
      </div>
    )
  }
}

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGoalById } from '../../getters'
import { deleteGoal, markGoalAsDone } from '../../actions'
import fecha from '../../utils/fecha.mjs'
// import { Link } from 'react-router-dom'

class GoalDetailPage extends Component {
  render () {
    const {deleteGoal, markGoalAsDone} = this.props
    const {name:goalName, createdAt, dueDate, id, isDone} = this.props.goal
    // TODO: Define what should I include in this view
    // TODO: Add edit button
    // TODO: Styles, here.

    return (
      <section>
        <h2>Goal Detail Page</h2>
        <h3>{isDone && 'DONE'} {goalName}</h3>
        <p>You should do this by <time dateTime={dueDate}>
            {fecha(dueDate)}</time>
        </p>
        <p>This goal was created at <time dateTime={createdAt}> {fecha(createdAt)}</time></p>
        <a onClick={deleteGoal}>Delete Goal</a>
        <br />
        {isDone &&
         <a onClick={markGoalAsDone}>Mark goal as Done</a>}
      </section>
    )
  }
}

const mapStateToProps = (state, props) => ({
  goal: getGoalById(state, props.match.params.id)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteGoal: () => dispatch(deleteGoal(ownProps.match.params.id)),
  markGoalAsDone: () => dispatch(markGoalAsDone(ownProps.match.params.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(GoalDetailPage)

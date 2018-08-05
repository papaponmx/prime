import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGoalById } from '../../getters'

class GoalDetailPage extends Component {
  render () {
    const {
      name: goalName,
      id,
      dueDate,
      createdAt,
    } = this.props.goal
    // TODO: Define what should I include in this view
    // TODO: Add edit button
    // TODO: Styles, here.
    return (
      <section>
        <h2>Goal Detail Page</h2>
        <h3>{goalName}</h3>
        <p>You should do this by <time dateTime={dueDate}>{dueDate}</time>
        </p>

        <p>This goal was created at <time dueTime={createdAt}>{createdAt}</time>
        </p>

      </section>
    )
  }
}

const mapStateToProps = (state, props) => ({
  goal: getGoalById(state, props.match.params.id),
})
// const mapDispatchToProps = {

// }


export default connect(mapStateToProps)(GoalDetailPage);

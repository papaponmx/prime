import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGoals } from '../../actions'

export class GoalsList extends Component {
  componentDidMount () {
    if (!this.props.goals.fetched) {
      this.props.fetchGoals()
    }
  }

  render () {
    const {       goals, fetched    } =  this.props;

    return (
      <div>
        <h3>These are your Goals</h3>
        <ul>
          {fetched && goals.map( ({ id, name}) => (
            <li key={id}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  goals: state.goals.list,
  fetched: state.goals.fetched,
})

const mapDispatchToProps = (dispatch) => ({
  fetchGoals: () => dispatch(fetchGoals()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GoalsList)

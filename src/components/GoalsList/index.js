import { connect } from 'react-redux'
import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List';

class GoalsList extends Component {
  // TODO: Fisrt Optimize this component
  // IDEA: Add role badge to each list item
  renderList () {
    const {goals} = this.props
    return goals.list.map((goal) => {
      const { goalName } = goal
      return (
        <List>
          <ListItem key={goalName}>
            {goalName}
          </ListItem>
        </List>
      )
    })
  }

  render () {
    return (
      <div>
        {(this.props.goals.list)
           ? this.renderList()
           : `Please start by adding some goals`}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  goals: state.goals.toJS()
})

export default connect(mapStateToProps, null)(GoalsList)

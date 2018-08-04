import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GoalsList from '../../components/goals-list';
import Button from '@material-ui/core/Button';
import { themeStyle } from '../../styles/buttonStyles';


export class GoalsPage extends Component {
  render() {
    return (
      <div>
        <h1>Goals</h1>
        {/* TODO: Add List with all goals */}
        <GoalsList />
        <Link to="/goals/add">
          <Button style={themeStyle}>Add new goal</Button>
        </Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return { goals: state.goals };
}

export default connect(mapStateToProps, null)(GoalsPage);

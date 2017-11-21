import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import React, { Component } from 'react'
import GoalsList from '../../components/goals-list';
import Button from 'material-ui/Button';

class GoalsPage extends Component {
  render() {
    return (
      <div>
      <h1>Goals</h1>
      <GoalsList goals={this.props.goals} />
      <Button onClick={ () => this.props.changePage()}>Add Goal</Button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/goals/add')
}, dispatch)

function mapStateToProps(state) {
    return { goals: state.goals };
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalsPage);


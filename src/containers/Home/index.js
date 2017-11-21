import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RolesList from '../../components/roles-list';
import GoalsList from '../../components/goals-list';

class Home extends Component {

  render() {
    return (
      <div>
        <h1>Home</h1>
        <RolesList roles={this.props.roles ? this.props.roles : []} />
        <GoalsList goals={this.props.goals ? this.props.goals : []} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  goals: state.goals,
  roles: state.roles,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

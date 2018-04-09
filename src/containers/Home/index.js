import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CardHeader } from 'material-ui/Card';

import RolesList from '../../components/roles-list';
import GoalsList from '../../components/goals-list';

class Home extends Component {

  render() {
    return (
      <div>
        <CardHeader
          title="Prime"
        />
        <CardHeader
          title="Roles"
          subtitle="Subtitle"
        />
        <RolesList roles={this.props.roles ? this.props.roles : []} />

        <CardHeader
          title="Goals"
          subtitle="Here are the next things you are about to accomplish"
        />
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

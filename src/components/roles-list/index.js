import React, { Component } from 'react';
import _ from 'lodash';

import GoalsList from '../goals-list';

export default class RolesList extends Component {
  renderList() {
      return _.map(this.props.roles, role => {
        return (
        <li key={role.id}>
          {role.name}
          <GoalsList goals={role.goals} />
        </li>
      )
    });
  }

  render() {
    return (
      <ul className="roles-list">
        {this.props.roles ? this.renderList() : '' }
      </ul>);
    }
  }

import React, { Component } from 'react';
import _ from 'lodash';

export default class RolesList extends Component {
  renderList() {
      return _.map(this.props.roles.list, role => {
        return <li key={role.id}>{role.name}</li>
      })
  }

  render() {
    return (
      <ul className="roles-list">
        {this.props.roles ? this.renderList() : '' }
      </ul>);
    }
  }

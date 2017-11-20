import React, { Component } from 'react';
import _ from 'lodash';

export default class RolesList extends Component {
  renderList() {
    if (this.props.roles.length === 0) {
      return <span className="card-info">
      </span>
    } else {
      return _.map(this.props.roles, role => {
        return <li key={role.id}>{role.name}</li>
      })
    }

  }

  render() {
    return (
      <ul className="roles-list">
        {this.renderList()}
      </ul>);
    }
  }

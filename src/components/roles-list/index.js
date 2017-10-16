import React, { Component } from 'react';
import _ from 'lodash';

export default class RolesList extends Component {
  renderList() {
    if (this.props.roles.length === 0) {
      return <span className="card-info">
        Please add some roles
      </span>
    } else {
      return _.map(this.props.roles, role => {
        return <li key={role.id}>Hola {role.role}</li>
      })
    }

  }

  render() {
    console.log(this.renderList());
    return (
      <div className="roles-list">
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

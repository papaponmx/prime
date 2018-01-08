import _ from 'lodash';
import React, { Component } from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';

export default class GoalsList extends Component {
  renderList() {
    return _.map(this.props.goals, goal => {
      return(
        <ListItem key={goal.id + goal.name} className="flex-row-space-between goal-single">
          <ListItemText primary={goal.name} />
        </ListItem>
      );
    });
  }

  render() {
    return (
      <List className={"goals-list" + (this.props.nested && ' nested-list')} >
        {this.props.goals ? this.renderList() : ''}
      </List>);
    }
  }

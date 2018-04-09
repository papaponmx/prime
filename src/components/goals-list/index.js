import _ from 'lodash';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import List, { ListItem, } from 'material-ui/List';
import { CardText } from 'material-ui/Card';

class GoalsList extends Component {
  // TODO: Optimize this component
  // IDEA: Add role badge to each list item
  renderList() {
    let goalFinded;
    if(this.props.roles) {
      goalFinded = _.find(this.props.roles, role => {
        if(role.goals){
          return role.goals.length > 0
        }
      });
    }
    if (this.props.roles &&  goalFinded !== undefined) {
      return _.map(this.props.roles, role => {
        return _.map(role.goals, goal => (
          <ListItem>{goal.name}</ListItem>
        ))
      });
    } else {
      return (
        <ListItem>
          You have no goals defined for this role
        </ListItem>
      )
    }
  }

  render() {
    return (
      <List className={"goals-list" + (this.props.nested && ' nested-list')} >
        {this.renderList()}
      </List>);
    }
  }

  const mapStateToProps= state => ({
    roles: state.roles.list,
  });

  export default connect(mapStateToProps, null)(GoalsList);

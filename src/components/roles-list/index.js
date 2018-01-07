import React, { Component } from 'react';
// import {connect} from 'react-redux';

import _ from 'lodash';

import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import GoalsList from '../goals-list';

export default class RolesList extends Component {
  renderList() {
    return _.map(this.props.roles, role => {
      return (
        [
          <ListItem className="flex-col-start"
            key={role.id + 'B'}
          >
            <div className="flex-row-space-between">
              <ListItemText primary={role.name} />
              <IconButton
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </div>
            <Collapse in={true} timeout="auto" unmountOnExit>
              <GoalsList goals={role.goals} nested={true} />
            </Collapse>
          </ListItem>,
          <Divider key={role.id + 'A'} />
            ]
          )
        });
      }

      render() {
        return (
          <List className="roles-list">
            {this.props.roles ? this.renderList() : '' }
          </List>);
        }
      }

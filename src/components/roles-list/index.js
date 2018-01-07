import React, { Component } from 'react';
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
          <ListItem
            key={role.id + 'B'}
          >
            <div className="flex-row-space-between">
              {role.name}
              <IconButton
                onClick={this.handleExpandClick}
                // aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </div>
                <Collapse>
                  <GoalsList goals={role.goals} />
                </Collapse>
              </ListItem>,
              <Divider key={role.id + 'A'} light />
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

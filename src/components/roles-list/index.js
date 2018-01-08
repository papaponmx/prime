import React, { Component } from 'react';
import {connect} from 'react-redux';

import _ from 'lodash';

import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import GoalsList from '../goals-list';
import { addCollapse, toggleCollapse } from '../../actions';

class RolesList extends Component {
  componentWillMount() {
    for (let role of this.props.roles) {
      this.props.registerCollapse(role.id)
    }
  }

renderList() {
  return _.map(this.props.roles, role => {
    return (
      [
        <ListItem className="flex-col-start"
          key={role.id + 'B' + role}>
          <div className="flex-row-space-between">
            <ListItemText primary={role.name} />
            <IconButton aria-label="Show more">
              <ExpandMoreIcon />
            </IconButton>
          </div>
          <Collapse in={true} timeout="auto" unmountOnExit>
            <GoalsList goals={role.goals} nested={true} />
          </Collapse>
        </ListItem>,
        <Divider key={role.id + role.name + 'A'} />
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

const mapStateToProps= state => ({
  collapses: state.collapses,
});


const mapDispatchToProps = {
  registerCollapse: (id) => addCollapse(id),
  toggle: (id) => toggleCollapse(id),

}

export default connect(mapStateToProps, mapDispatchToProps)(RolesList);

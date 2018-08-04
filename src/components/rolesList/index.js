import React, { Component } from 'react'
import { connect } from 'react-redux'
import { map as _map } from 'lodash'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

// import GoalsList from '../goals-list'
// import { addCollapse, toggleCollapse } from '../../actions'
// import { getRoles } from '../../selectors/roles'

class RolesList extends Component {
  componentDidMount () {
    // if (this.props.roles){
    //   for (let role of this.props.roles) {
    //     this.props.registerCollapse(role.name)
    //   }
    // }
  }

  renderList () {
    return _map(this.props.roles.list, role => (
    [
      <ListItem className='flex-col-start' key={role}>
        <div className='flex-row-space-between'>
          <ListItemText primary={role.name} />
        </div>
      </ListItem>,
      <Divider key={`DIV-${role.name}`} />
    ]
    )
    )
  }

  render () {
    return (
      <List className='roles-list'>
        {this.props.roles.list.length > 0 ? this.renderList() : 'Please start by adding some roles'}
      </List>)
  }
}

const mapStateToProps = state => ({
  collapses: state.collapses
})

export default connect(mapStateToProps)(RolesList)

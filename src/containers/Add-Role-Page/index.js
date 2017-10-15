import { addRole } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import AddRoleForm from '../../components/Add-Role-Form';
// import RolesList from '../../components/roles-list';
import '../../reducers'
import _ from 'lodash';

// import { Link } from 'react-router-dom';



class AddRolePage extends React.Component {
  submit = (values, event) => {
    values.id = this.props.roles.roles.length;
    this.props.addRole(values);
  }


  renderList() {
    return _.map(this.props.roles.roles, role => {
      return <p key={role.id}>Hola {role.role}</p>
    })
  }

  render() {
    return (
      <div>
        <AddRoleForm onSubmit={this.submit} />
        {this.renderList()}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addRole},dispatch)
}

function mapStateToProps (state) {
  return { roles: state.roles };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRolePage);

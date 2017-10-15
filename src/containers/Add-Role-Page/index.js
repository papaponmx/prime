import { addRole } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import AddRoleForm from '../../components/Add-Role-Form';
import RolesList from '../../components/roles-list';
import '../../reducers'
// import _ from 'lodash';

// import { Link } from 'react-router-dom';



class AddRolePage extends React.Component {
  submit = (values) => {
    this.props.addRole(values);
  }


// TODO: Verify map state to props and render list 
  // renderList() {
  //   return _.map(this.props.roles.roles, role => {
  //     return <span>{role}</span>
  //   })
  // }

  render() {
    return (
    <div>
      <AddRoleForm onSubmit={this.submit} />

    </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addRole},dispatch)
}

const mapStateToProps = (state) => {
	return { roles: state.roles };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRolePage);

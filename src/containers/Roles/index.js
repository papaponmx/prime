import { addRole } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import AddRoleForm from '../../components/Add-Role-Form';
import RolesList from '../../components/roles-list';
import '../../reducers';
import Button from 'material-ui/Button';


class RolePage extends React.Component {
  submit = (values, event) => {
    values.id = this.props.roles.roles.length;
    this.props.addRole(values);
  }

  render() {
    return (
      <div>
        <AddRoleForm onSubmit={this.submit} />
        <RolesList roles={this.props.roles.roles} />
        <Button>Do stuff</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(RolePage);

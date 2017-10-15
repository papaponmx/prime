import { addRole } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import AddRoleForm from '../../components/Add-Role-Form';
// import { Link } from 'react-router-dom';



class AddRolePage extends React.Component {
  submit = (values) => {
    // event.preventDefault();

    this.props.addRole(values);
    console.log(values);
  }
  render() {
    return (
      <AddRoleForm onSubmit={this.submit} />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addRole},dispatch)
}

export default connect(null, mapDispatchToProps)(AddRolePage);

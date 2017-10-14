import React from 'react';
import AddRoleForm from '../../components/Add-Role-Form';

export default class AddRolePage extends React.Component {
  submit = (values) => {
    // print the form values to the console
    console.log(values);
  }
  render() {
    return (
      <AddRoleForm onSubmit={this.submit} />
    )
  }
}

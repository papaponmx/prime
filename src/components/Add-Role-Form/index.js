import React from 'react'
// import { connect } from 'react-redux'
import { Field, reduxForm, } from 'redux-form'


class AddRoleForm extends React.Component {

  render() {
    return (
      <form>
        <label htmlFor="add-role-input">Add Role:</label>
        <Field name="add-role-input" component="input" type="text" id="add-role-input"/>
      </form>
    )
  }
}

export default AddRoleForm = reduxForm({
  form: 'AddRoleForm',
})(AddRoleForm);

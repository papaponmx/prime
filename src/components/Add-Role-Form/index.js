import React from 'react';
import { Field, reduxForm } from 'redux-form';


let AddRoleForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="firstName">Role</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      {/* TODO: Add action an reducer to bind with the store */}
      {/* TODO: Add form validation */}
      {/* TODO: Add a note message that explains what a role should be */}
      <button type="submit">Submit</button>
    </form>
    );
  }

  AddRoleForm = reduxForm({
    form: 'add-role-form'
  })(AddRoleForm);

  export default AddRoleForm;

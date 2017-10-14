import React from 'react';
import { Field, reduxForm } from 'redux-form';


let AddRoleForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
    );
  }

  AddRoleForm = reduxForm({
    // a unique name for the form
    form: 'add-role-form'
  })(AddRoleForm);

  export default AddRoleForm;

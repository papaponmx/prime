import { Field, reduxForm } from 'redux-form';
import React from 'react';

/* TODO: Add a note message that explains what a role should be */

const validate = values => {
  const errors = {}
  if (!values.role) {
    errors.role = 'Required'
  } else if (values.role.length < 3) {
    errors.role = 'Must be 3 characters or more'
  }
  return errors
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
    </div>
  </div>
)

const AddRoleForm = props => {
  const { handleSubmit, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="role"
        type="text"
        component={renderField}
        label="Role"
      />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'syncValidation', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
})(AddRoleForm);

import React from 'react';
import { Field, reduxForm } from 'redux-form';

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
      <span className="form-info">What are the roles you play in your day to day life?</span>
      <button type="submit" disabled={submitting}>
        Submit
      </button>
    </form>
  )
}

export default reduxForm({
  validate,
  form: 'syncValidation',
})(AddRoleForm);

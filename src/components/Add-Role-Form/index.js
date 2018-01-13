import { addRole } from '../../actions';
import React from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm, } from 'redux-form'
import Button from 'material-ui/Button';
import { reset } from 'redux-form';
import TextField from 'material-ui/TextField';

// TODO: Migrate render TextField to another component
// TODO: Add role description as an optional parameter;

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, }
}) => {
  if (touched && error) {
    return (
      <TextField
        required
        error
        id="required"
        label={error}
        margin="normal"
        {...input}
      />
    );
  }

  return (
    <TextField
      required
      id="required"
      margin="normal"
      {...input}
    />
  )
}

class AddRoleForm extends React.Component {

  render() {
    return (
      <form className="flex-col-start" onSubmit={this.props.handleSubmit}>
        <Field
          name="role"
          component={renderField}
          id="add-role-input"
          label="Add Role"
        />
        {/* <Field
          name="role"
          component={renderField}
          id="add-role-description-input"
          label="Role description"

        /> */}
        <Button type="submit" className="cta">Add Role</Button>

      </form>
    )
  }
}

const validate = (values) => {
  const errors= {};
  if (!values.role) {
    errors.role = `Role can't be empty`;
  }
  return errors;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values) => {
      dispatch(reset('AddRoleForm'));
      return dispatch(addRole(values));
    }

  }
}

AddRoleForm = reduxForm({
  form: 'AddRoleForm',
  validate,

})(AddRoleForm);


// FIXME: Roles are not being added properly.
export default AddRoleForm = connect (null, mapDispatchToProps)(AddRoleForm);

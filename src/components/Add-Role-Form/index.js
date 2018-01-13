import { connect } from 'react-redux';
import { Field, reduxForm, } from 'redux-form'
import { reset } from 'redux-form';

import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import { addRole, openSnackbar, closeSnackbar } from '../../actions';
import Snackbar from 'material-ui/Snackbar';

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

        <Snackbar
          open={false}
          message="{this.props.snackbar.message}"
          autoHideDuration={4000}
          onRequestClose={this.props.closeSnack}
        />
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
      dispatch(openSnackbar({
      message: `Added your role as a ${values.role}`,
      }));
      dispatch(addRole(values));
    },
    closeSnack: dispatch(closeSnackbar()),

  }
}

const mapStateToProps= state => ({
  snackbar: state.snackbar,
});

AddRoleForm = reduxForm({
  form: 'AddRoleForm',
  validate,

})(AddRoleForm);


// FIXME: Roles are not being added properly.
export default AddRoleForm = connect (mapStateToProps, mapDispatchToProps)(AddRoleForm);

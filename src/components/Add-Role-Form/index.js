import { addRole } from '../../actions';
import React from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm, } from 'redux-form'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { reset } from 'redux-form';

const renderField = props => {
  // FIXME: When I use this function,  redux-form does not emmit the event, nor catches the input value.
  return (
    <TextField name={props.name} placeholder="Daughter, student, boss, etc..."
    id={props.id}
    />
   )
}

// TODO: Add role description input to the form and to Redux.
// TODO: Add validations;

class AddRoleForm extends React.Component {  
  render() {
    return (
      <form className="flex-col-start" onSubmit={this.props.handleSubmit}>
        <label id="add-role-input">New Role</label>
        <Field name="role" component="input" id="add-role-input"/>
        <Button type="submit" className="cta">Add Role</Button>
      </form>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values) => {
      dispatch(addRole({payload: values}));
      dispatch(reset('AddRoleForm'));
    }

  }
}

AddRoleForm = reduxForm({
  form: 'AddRoleForm',
})(AddRoleForm);

export default AddRoleForm = connect (null, mapDispatchToProps)(AddRoleForm);

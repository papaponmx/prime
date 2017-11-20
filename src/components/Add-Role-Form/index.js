import React from 'react'
// import { connect } from 'react-redux'
import { Field, reduxForm, } from 'redux-form'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';



const renderField = props => {
  return (
    <TextField placeholder="Daughter, student, boss, etc..."
    id={props.id}
    />
   )
}

class AddRoleForm extends React.Component {

  render() {
    return (
      <form className="flex-col-start" >
        <label id="add-role-input">New Role</label>
        <Field name="add-role-input" component={renderField} id="add-role-input"/>
        <Button className="cta" label="Default">Default</Button>
      </form>
    )
  }
}

export default AddRoleForm = reduxForm({
  form: 'AddRoleForm',
})(AddRoleForm);

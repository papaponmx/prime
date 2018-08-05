import React, { Component } from 'react'
import { Field, reduxForm, reset } from 'redux-form'
import { connect } from 'react-redux'
import { addGoal } from '../../actions'

const required = value => value ? undefined : 'Required'
const maxLength = (value) => value && value.length > 100 ? `Must be ${100} characters or less` : undefined
const minValue = (value) => value && value < 3 ? `Must be at least ${3}` : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>
      {label}
    </label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

class AddGoalForm extends Component {
  render () {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name='goal'
          type='text'
          component={renderField}
          label='Goal'
          validate={[required, maxLength, minValue]} />
        <Field
          name='dueDate'
          type='date'
          component={renderField}
          label='Due date' />
        <div>
          <button type='submit' disabled={submitting}>
            Submit
          </button>
          <button type='button' disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    )
  }
}

// TODO: Add a select with Roles
// TODO: Styles, here.

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values) => {
      dispatch(addGoal(values))
      dispatch(reset('AddGoalForm'))
    }
  }
}

AddGoalForm = reduxForm({
  form: 'AddGoalForm'
})(AddGoalForm)

export default AddGoalForm = connect(null, mapDispatchToProps)(AddGoalForm)

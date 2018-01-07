import React, { Component } from 'react'
import { Field, reduxForm, reset} from 'redux-form'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button';

import { addGoal }from '../../actions';
import { renderSelect } from '../form-utils';

class AddGoalForm extends Component {
  render() {
    if (this.props.roles.length === 0) {
      return(
        <div>
          <p>Please start by adding some roles</p>
          <Link to="/roles/add">
          <Button>Add Roles</Button>
        </Link>
      </div>
    )
  } else {
    return (
      <form className="flex-col-start" onSubmit={this.props.handleSubmit}>
        <Field
          id="select-role-input"
          component={renderSelect}
          options={this.props.roles}
          label="Role"
          name="roleId"
        />

        <label id="add-goal-input">New goal</label>
        <Field
          name="goal"
          component="input"
          id="add-goal-input"
        />

        {/* TODO: Add meta-data for goals, like: status = completed, dueDate, priority, etc. */}
        <Button type="submit" className="cta">Add goal</Button>
      </form>
    );
  }
}
}

// TODO: Create added goal notification success or shit.

const mapStateToProps= state => ({
  roles: state.roles,
});


const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values) => {
      dispatch(addGoal(values));
      dispatch(reset('AddGoalForm'));
    },

  }
}

AddGoalForm = reduxForm({
  form: 'AddGoalForm',
})(AddGoalForm);

export default AddGoalForm = connect(mapStateToProps, mapDispatchToProps) (AddGoalForm);

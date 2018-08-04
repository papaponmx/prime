import React, { Component } from 'react'
import { Field, reduxForm, reset} from 'redux-form'
import { connect } from 'react-redux';
import Button from 'material-ui/Button';

import { addGoal }from '../../actions';
// import { renderSelect } from '../form-utils';

class AddGoalForm extends Component {
  render() {
    // TODO: Rethink goals-roles graph;
    // Should be something like this:
    // [
    //   {
    //     GoalName:
    //     roleId:
    //     dueDate:
    //
    //   }
    // ]

    return (
      <form className="flex-col-start" onSubmit={this.props.handleSubmit}>
      <label id="add-goal-input">New goal</label>
      <Field
      name="goal"
      component="input"
      id="add-goal-input"
      />
      <Field
      name=''
      component='input'
      id='goal-due-date'
      type='date'
      />

      {/* TODO: Add meta-data for goals, like: status = completed, dueDate, priority, etc. */}
      <Button type="submit" className="cta">Add goal</Button>
      </form>
    );
  }
}

// TODO: Create added goal notification success or shit.

const mapStateToProps= state => ({
  roles: state.roles.list,
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

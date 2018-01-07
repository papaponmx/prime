import React, { Component } from 'react'
import { connect } from 'react-redux';

import {Field, reduxForm, } from 'redux-form'
import { reset } from 'redux-form';

import Button from 'material-ui/Button';
import {addGoal }from '../../actions';
import {renderSelect, renderOptions} from '../form-utils'; 

class AddGoalForm extends Component {
  render() {
    return (
        <form className="flex-col-start" onSubmit={this.props.handleSubmit}>
          <label id="add-goal-input">New goal</label>
          <Field name="goal" component="input" id="add-goal-input" />
          <Button type="submit" className="cta">Add goal</Button>
        </form>
    )
  }
}

// TODO: Create added goal notification success or shit.

const mapStateToProps= state => ({
  roles: state.roles,
});


const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (values) => {
            dispatch(addGoal({ payload: values }));
            dispatch(reset('AddGoalForm'));
        }
    }
}

AddGoalForm = reduxForm({
    form: 'AddGoalForm',
})(AddGoalForm);

export default AddGoalForm = connect(mapStateToProps, mapDispatchToProps) (AddGoalForm);

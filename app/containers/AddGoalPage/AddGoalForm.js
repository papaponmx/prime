import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, reducer } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { addGoal } from '../GoalsList/actions';
import renderField from '../../components/Forms/Input';
import Select from '../../components/Forms/Select';
import saga from './saga';
import { TwoColumnRow } from './styles';

const required = value => (value ? undefined : 'Required');
const maxLength = value =>
  value && value.length > 100 ? `Must be ${100} characters or less` : undefined;
const minValue = value =>
  value && value < 3 ? `Must be at least ${3}` : undefined;

/* eslint-disable react/prefer-stateless-function */
class AddGoalForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="goal"
          defaultValue="Goal Name"
          type="text"
          component={renderField}
          label="Goal"
          validate={[required, maxLength, minValue]}
          required
        />
        <TwoColumnRow>
          <Field
            component={renderField}
            label="Due Date"
            type="date"
            name="dueDate"
            defaultValue="2017-05-24"
          />
          <Field component={Select} label="Role Associated" name="role" />
        </TwoColumnRow>
        <Field
          component={renderField}
          label="Description"
          type="text"
          name="description"
          multiline
        />
        <div>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </div>
      </form>
    );
  }
}

// TODO: Add a select with Roles
// TODO: Styles, here.

AddGoalForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.any,
  reset: PropTypes.func,
  submitting: PropTypes.any,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: values => {
    dispatch(addGoal(values));
  },
});

const withForm = reduxForm({
  form: 'AddGoalForm',
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'form', reducer });
const withSaga = injectSaga({ key: 'addGoal', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withForm,
)(AddGoalForm);

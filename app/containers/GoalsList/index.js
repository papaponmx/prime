/**
 *
 * GoalsList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectGoalsList from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { fetchGoals } from './actions';
import List from '../../components/List';

/* eslint-disable react/prefer-stateless-function */
export class GoalsList extends React.Component {
  componentDidMount() {
    // if (!this.props.goals.isLoaded && !this.props.goals.isLoading) {
    //   this.props.fetchGoals();
    // }
  }

  render() {
    const { list, isLoaded } = this.props.goals;
    return (
      <div>
        <FormattedMessage {...messages.header} />
        {isLoaded && <List list={list} listType="goals" />}
      </div>
    );
  }
}

GoalsList.propTypes = {
  // fetchGoals: PropTypes.func,
  goals: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  goals: makeSelectGoalsList(),
});

const mapDispatchToProps = dispatch => ({
  fetchGoals: dispatch(fetchGoals()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'goalsList', reducer });
const withSaga = injectSaga({ key: 'goalsList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(GoalsList);

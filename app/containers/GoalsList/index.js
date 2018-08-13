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
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <List />
      </div>
    );
  }
}

GoalsList.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  goalslist: makeSelectGoalsList(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchGoals: dispatch(fetchGoals()),
  };
}

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

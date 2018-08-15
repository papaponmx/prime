/**
 *
 * GoalDetail
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import saga from './saga';
import messages from './messages';
import { selectGoalById } from '../GoalsList/selectors';
import { deleteGoal } from '../GoalsList/actions';
import fecha from '../../utils/fecha';

/* eslint-disable react/prefer-stateless-function */
export class GoalDetail extends React.Component {
  render() {
    const { deleteGoal, markGoalAsDone } = this.props;
    const { name: goalName, createdAt, dueDate, id, isDone } = this.props.goal;
    // TODO: Define what should I include in this view
    // TODO: Add edit button
    // TODO: Styles, here.

    return (
      <section>
        <h2>
          <FormattedMessage {...messages.header} />
        </h2>
        <h3>
          {isDone && 'DONE'} {goalName}
        </h3>
        <p>
          You should do this by <time dateTime={dueDate}>{fecha(dueDate)}</time>
        </p>
        <p>
          This goal was created at{' '}
          <time dateTime={createdAt}> {fecha(createdAt)}</time>
        </p>
        <a onClick={deleteGoal}>Delete Goal</a>
        <br />
        {isDone && <a onClick={markGoalAsDone}>Mark goal as Done</a>}
      </section>
    );
  }
}

GoalDetail.propTypes = {
  // name: PropTypes.string,
  // createdAt: PropTypes.string,
  // dueDate: PropTypes.string,
  // id: PropTypes.string,
  // isDone: PropTypes.bool,
};

const mapStateToProps = (state, props) => ({
  goal: selectGoalById(state, props.match.params.id),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteGoal: () => dispatch(deleteGoal(ownProps.match.params.id)),
  markGoalAsDone: () => dispatch(markGoalAsDone(ownProps.match.params.id)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withSaga = injectSaga({ key: 'goalDetail', saga });

export default compose(
  withSaga,
  withConnect,
)(GoalDetail);

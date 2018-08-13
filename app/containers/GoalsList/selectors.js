import { createSelector } from 'reselect';

/**
 * Direct selector to the goalsList state domain
 */

const selectGoalsListDomain = state => state.goalsList;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GoalsList
 */

const makeSelectGoalsList = () =>
  createSelector(selectGoalsListDomain, substate => substate);

export default makeSelectGoalsList;
export { selectGoalsListDomain };

import { createSelector } from 'reselect';

/**
 * Direct selector to the goalsList state domain
 */

const selectGoalsListDomain = state => state.goalsList;

/**
 * Other specific selectors
 */

export const selectGoalsList = state => state.goalsList.list;

export const selectGoalById = (state, id) =>
  selectGoalsList(state).find(goals => goals.id === id);

/**
 * Default selector used by GoalsList
 */

const makeSelectGoalsList = () =>
  createSelector(selectGoalsListDomain, substate => substate);

export default makeSelectGoalsList;
export { selectGoalsListDomain };

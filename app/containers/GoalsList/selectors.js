import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the goalsList state domain
 */

const selectGoalsListDomain = state => state.get('goalsList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by GoalsList
 */

const makeSelectGoalsList = () =>
  createSelector(selectGoalsListDomain, substate => substate.toJS());

export default makeSelectGoalsList;
export { selectGoalsListDomain };

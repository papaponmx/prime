import {
  // DELETE_GOAL,
  // DELETE_GOAL_ERROR,
  // DELETE_GOAL_SUCCESS,
  FETCH_GOALS,
  // FETCH_GOALS_ERROR,
  // FETCH_GOALS_SUCCESS,
} from '../constants';
import { fetchGoals } from '../actions';

describe('GoalsList actions', () => {
  describe('Default Action', () => {
    it('has a type of FETCH_GOALS', () => {
      const expected = {
        type: FETCH_GOALS,
      };
      expect(fetchGoals()).toEqual(expected);
    });
  });
});

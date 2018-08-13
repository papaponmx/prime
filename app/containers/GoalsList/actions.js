/*
 *
 * GoalsList actions
 *
 */

import {
  FETCH_GOALS,
  FETCH_GOALS_ERROR,
  FETCH_GOALS_SUCCESS,
} from './constants';

export function fetchGoals() {
  return {
    type: FETCH_GOALS,
  };
}

export const fetchGoalsError = payload => ({
  type: FETCH_GOALS_ERROR,
  payload,
});

export const fetchGoalsSuccess = goals => ({
  type: FETCH_GOALS_SUCCESS,
  payload: goals,
});

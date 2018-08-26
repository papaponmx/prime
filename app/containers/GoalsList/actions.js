/*
 *
 * GoalsList actions
 *
 */

import {
  DELETE_GOAL,
  DELETE_GOAL_ERROR,
  DELETE_GOAL_SUCCESS,
  FETCH_GOALS,
  FETCH_GOALS_ERROR,
  FETCH_GOALS_SUCCESS,
  ADD_GOAL,
  ADD_GOAL_ERROR,
  ADD_GOAL_SUCCESS,
  MARK_GOAL_AS_DONE,
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

export function deleteGoal(goalId) {
  return {
    type: DELETE_GOAL,
    payload: goalId,
  };
}

export const deleteGoalError = payload => ({
  type: DELETE_GOAL_ERROR,
  payload,
});

export const deleteGoalSuccess = goals => ({
  type: DELETE_GOAL_SUCCESS,
  payload: goals,
});

export const addGoal = values => ({
  type: ADD_GOAL,
  payload: values,
});

export const addGoalError = values => ({
  type: ADD_GOAL_ERROR,
  payload: values,
});

export const addGoalSuccess = values => ({
  type: ADD_GOAL_SUCCESS,
  payload: values,
});

export const markGoalAsDone = goalId => ({
  type: MARK_GOAL_AS_DONE,
  payload: goalId,
});

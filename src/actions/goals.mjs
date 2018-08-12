import {
  ADD_GOAL,
  FETCH_GOALS,
  FETCH_GOALS_ERROR,
  FETCH_GOALS_SUCCESS,
  DELETE_GOAL,
  DELETE_GOAL_ERROR,
  DELETE_GOAL_SUCCESS,
  MARK_GOAL_AS_DONE,
} from './index.mjs'

export const addGoal = values => {
  return {
    type: ADD_GOAL,
    payload: values
  }
}

export const fetchGoals = (params) => ({
  type: FETCH_GOALS,
  payload: params,
})

export const fetchGoalsError = (params) => ({
  type: FETCH_GOALS_ERROR,
  payload: params,
})

export const fetchGoalsSuccess = (params) => ({
  type: FETCH_GOALS_SUCCESS,
  payload: params,
})

export const deleteGoal = (params) => ({
  type: DELETE_GOAL,
  payload: params,
})

export const deleteGoalError = (params) => ({
  type: DELETE_GOAL_ERROR,
  payload: params,
})

export const deleteGoalSuccess = (params) => ({
  type: DELETE_GOAL_SUCCESS,
  payload: params,
})

export const markGoalAsDone = (id) => ({
  type: MARK_GOAL_AS_DONE,
  payload: id,
})

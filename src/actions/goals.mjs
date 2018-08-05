import { ADD_GOAL, FETCH_GOALS, FETCH_GOALS_ERROR, FETCH_GOALS_SUCCESS} from '.'
import { getUid } from '../getters';

export const addGoal = values => {
  return {
    type: ADD_GOAL,
    payload: values
  }
}

export const fetchGoals = (params) => ({
  type: FETCH_GOALS,
  payload: {
    ...params
  }
})

export const fetchGoalsError = (params) => ({
  type: FETCH_GOALS_ERROR,
  payload: params
})

export const fetchGoalsSuccess = (params) => ({
  type: FETCH_GOALS_SUCCESS,
  payload: params
})

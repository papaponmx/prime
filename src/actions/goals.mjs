import { ADD_GOAL } from '.'

export const addGoal = values => {
  return {
    type: ADD_GOAL,
    payload: values
  }
}

import { ADD_GOAL } from '../types';

export const addGoal = values => {
  return {
    type: ADD_GOAL,
    payload: values,
  }
};

/*
 *
 * GoalsList reducer
 *
 */

import { DEFAULT_ACTION } from './constants';

export const initialState = {};

function goalsListReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default goalsListReducer;

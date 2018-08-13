/*
 *
 * GoalsList reducer
 *
 */

import {
  FETCH_GOALS,
  FETCH_GOALS_ERROR,
  FETCH_GOALS_SUCCESS,
} from './constants';

export const initialState = {
  loading: false,
  loaded: false,
  list: [],
};

function goalsListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GOALS:
      return state;
    case FETCH_GOALS_ERROR:
      return state;
    case FETCH_GOALS_SUCCESS:
      return state;
    default:
      return state;
  }
}

export default goalsListReducer;

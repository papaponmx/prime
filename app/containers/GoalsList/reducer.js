/*
 *
 * GoalsList reducer
 *
 */

import {
  FETCH_GOALS,
  FETCH_GOALS_ERROR,
  FETCH_GOALS_SUCCESS,
  DELETE_GOAL,
  DELETE_GOAL_ERROR,
} from './constants';

export const initialState = {
  isLoading: false,
  isLoaded: false,
  list: [],
  error: null,
};

function goalsListReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_GOALS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_GOALS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case FETCH_GOALS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        list: payload,
      };
    case DELETE_GOAL:
      return {
        ...state,
      };
    case DELETE_GOAL_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}

export default goalsListReducer;

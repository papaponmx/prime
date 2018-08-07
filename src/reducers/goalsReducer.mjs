import "babel-polyfill";
import {
  FETCH_GOALS,
  FETCH_GOALS_ERROR,
  FETCH_GOALS_SUCCESS,
  MARK_GOAL_AS_DONE,
} from "../actions";

const initialState = {
  fetched: false,
  fetching: false,
  list: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_GOALS:
      return {
        fetching: true,
        ...state,
      };
    case FETCH_GOALS_ERROR:
      // IDEA: Add an error handler.
      return {
        ...state,
        fetching: false,
        fetched: false
      };
    case FETCH_GOALS_SUCCESS:
      return {
        ...state,
        fetched: true,
        fetching: false,
        list: payload,
      };
    case MARK_GOAL_AS_DONE:
    return {
      ...state
    }

    default:
      return state;
  }
};

import { List, Map, } from 'immutable';
import { ADD_GOAL } from "../actions/index";

const initialState = Map({
  list: List([]),
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOAL:
      const { goal: goalName } = action.payload;
      return state.update('list', list =>
      list.push({
        goalName,
      }));

    default:
    return state;
  }
}

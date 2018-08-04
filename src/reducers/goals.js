import { ADD_GOAL } from "../actions/index";

const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOAL:
      const { goal: goalName } = action.payload;
      return {
        list: [...state.list, goalName]
      }

    default:
    return state;
  }
}

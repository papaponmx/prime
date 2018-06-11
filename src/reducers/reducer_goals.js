import { ADD_GOAL } from "../actions/index";
import { List, Map, } from 'immutable';


let initialState = Map({
  snackbar: {
    message: 'Initial State',
    open: false,
  },
  list: List([]),
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOAL:
    debugger;
    const newItem =  { name: action.payload.role };
    const newState = state.update('list', list => list.push(newItem));

    return newState;

    default:
    return state;
  }
}

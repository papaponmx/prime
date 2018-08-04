// import _ from 'lodash';
import { List, Map, } from 'immutable';
import {
  // ADD_GOAL,
  ADD_ROLE,
  DELETE_ROLE,
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
} from '../actions';

let initialState = Map({
  snackbar: {
    message: 'Initial State',
    open: false,
  },
  list: List([]),
});
//  TODO: Add localStorage Interaction
// const roles = localStorage.getItem('roles');
// if (roles) {
//   initialState.list.merge(JSON.parse(roles));
// }

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_ROLE:
    const newItem =  { name: action.payload.role };
    const newState = state.update('list', list => list.push(newItem));
    // localStorage.setItem('roles', JSON.stringify(newState));
    return newState;

    case OPEN_SNACKBAR:
    // TODO: use immutable here
    return state;
    case CLOSE_SNACKBAR:
    // TODO: use immutable here
    return state;
    case DELETE_ROLE:
    // TODO: use immutable here
    return state;
    default:
    return state;
  }

}

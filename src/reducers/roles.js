import {
  // ADD_GOAL,
  ADD_ROLE,
  DELETE_ROLE,
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
} from '../actions';

let initialState = {
  snackbar: {
    message: 'Initial State',
    open: false,
  },
  list: [],
};
//  TODO: Add localStorage Interaction
// const roles = localStorage.getItem('roles');
// if (roles) {
//   initialState.list.merge(JSON.parse(roles));
// }

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROLE:
    return state;

    case OPEN_SNACKBAR:
    return state;
    case CLOSE_SNACKBAR:
    return state;
    case DELETE_ROLE:
    return state;
    default:
    return state;
  }

}

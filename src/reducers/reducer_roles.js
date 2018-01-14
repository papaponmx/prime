import _ from 'lodash';
import {
  ADD_GOAL,
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


const roles = localStorage.getItem('roles');
if (roles) {
  initialState = JSON.parse(roles);
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_ROLE:
    const id = _.size(state.list) + 1;
    const newItem =  {
        id,
        name: action.payload.role,
        goals: [],
    };
    let list = [...state.list, newItem];
    list = _.uniqBy(list, 'name');

    let newState = {
      ...state,
      list,
    }

    localStorage.setItem('roles', JSON.stringify(newState));
    return newState;

    case DELETE_ROLE:
    const newRoles = _.omit(state.list, action.payload);
    return {
      ...state,
      roles: newRoles
    }

    case ADD_GOAL:
    const roleSelected =  _.find(state.list, role => role.id === Number(action.payload.roleId));
    const name = action.payload.goal
    const goalId = `${_.size(roleSelected.list) + 1}G${action.payload.roleId}`;
    const goals = _.concat(roleSelected.goals, {
      name,
      id: goalId,
    });
    const roleWithNewGoal = {
      ...roleSelected,
      goals,
    }
    const oldState = _.reject(state, roleSelected);
    newState = _.concat(oldState, roleWithNewGoal);
    localStorage.setItem('roles', JSON.stringify(newState));
    return newState;

    case OPEN_SNACKBAR:
    return {
      ...state,
      snackbar: {
        open: true,
        message: action.payload.message,

      }
    }
    case CLOSE_SNACKBAR:
    return {
      ...state,
      snackbar: {
        open: false,
        message: '',
      }
    }

  default:
  return state;
}

}

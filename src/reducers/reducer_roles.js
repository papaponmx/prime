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
  debugger;
  initialState = JSON.parse(roles);
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_ROLE:
    const newItem =  {
      id: _.size(state) + 1,
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

    case ADD_GOAL:
    const roleSelected =  _.findIndex(state.list, role => role.id === Number(action.payload.roleId));
    const name = action.payload.goal;
    const goalId = `${_.size(roleSelected.list) + 1}G${action.payload.roleId}`;
    debugger;
    list = [ {
      ...state.list[roleSelected],
      goals: [
        ...state.list[roleSelected].goals,
        {
          name,
          id: goalId,
        },
      ]
    },
    ...state.list,
  ];
  list = _.uniqBy(list, 'id');
  newState = {
    ...state,
    list,
  };

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

  case DELETE_ROLE:
  const newRoles = _.omit(state.list, action.payload);
  return {
    ...state,
    roles: newRoles
  }

  default:
  return state;
}

}

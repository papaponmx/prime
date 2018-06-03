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
    const newItem =  {
      id: new Date().valueOf(),
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
    const roleSelected =  Array.filter(state.list, role => role.id === Number(action.payload.roleId));
    const name = action.payload.goal;
    const goalId = `${_.size(roleSelected[0].list) + 1}G${action.payload.roleId}`;
    list = [ {
      ...state.list[roleSelected[0]],
      goals: [
        ...state.list[roleSelected[0]].goals,
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

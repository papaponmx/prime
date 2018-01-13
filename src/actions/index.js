export const ADD_ROLE = 'add_role';
export const DELETE_ROLE = 'delete_role';
export const OPEN_MODAL = '';

export const ADD_GOAL = 'ADD_GOAL';
export const DELETE_GOAL = 'DELETE_GOAL';

export const ADD_COLLAPSE = 'ADD_COLLAPSE';
export const TOGGLE_COLLAPSE = 'TOGGLE_COLLAPSE';

export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';

export function addRole(values) {
  return {
    type: ADD_ROLE,
    payload: values,
    goals: []
  }
}

export function deleteRole(role) {
  return {
    type : DELETE_ROLE,
    payload: role
  }
}


export const addGoal = (values) => {
  return {
    type: ADD_GOAL,
    payload: values,
  }
};

export const addCollapse = (id) => ({
  type: ADD_COLLAPSE,
  payload: id,
});

export const toggleCollapse = (id) => ({
  type: TOGGLE_COLLAPSE,
  payload: id
});

export const openSnackbar = (message) => ({
  type: OPEN_SNACKBAR,
  payload: message,
});

export const closeSnackbar = () => ({
  type: CLOSE_SNACKBAR,
});

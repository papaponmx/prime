export const ADD_ROLE = 'add_role';
export const DELETE_ROLE = 'delete_role';
export const OPEN_MODAL = '';

export const ADD_GOAL = 'ADD_GOAL';
export const DELETE_GOAL = 'DELETE_GOAL';

export function addRole(action) {
  return {
    type: ADD_ROLE,
    payload: action.payload.role,
    goals: []
  }
}

export function deleteRole(role) {
  return {
    type : DELETE_ROLE,
    payload: role
  }
}


export const addGoal = (action) => ({
  type: ADD_GOAL,
  payload: action.payload.goal
});

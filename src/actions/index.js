export const ADD_ROLE = 'add_role';
export const DELETE_ROLE = 'delete_role';
export const OPEN_MODAL = '';

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

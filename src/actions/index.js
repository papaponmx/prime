export const ADD_ROLE = 'add_role';
export const DELETE_ROLE = 'delete_role';

export function addRole(role) {
  return {
    type: ADD_ROLE,
    payload: role
  }
}

export function deleteRole(role) {
  return {
    type : DELETE_ROLE,
    payload: role
  }
}

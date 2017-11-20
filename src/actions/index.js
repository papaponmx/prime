export const ADD_ROLE = 'add_role';
export const DELETE_ROLE = 'delete_role';
export const OPEN_MODAL = '';

export function addRole(role) {
console.log('inside of action. Role is: ', role);
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

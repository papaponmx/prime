export const ADD_ROLE = 'add_role';

export function addRole(role) {
  return {
    type: ADD_ROLE,
    payload: role
  }
}

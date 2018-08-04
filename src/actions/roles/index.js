import {
  ADD_ROLE,
  DELETE_ROLE
} from '../types';

export function addRole(values) {
  return {
    type: ADD_ROLE,
    payload: values,
    goals: [],
  }
}

export function deleteRole(role) {
  return {
    type: DELETE_ROLE,
    payload: role,
  }
}

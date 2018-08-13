/*
 *
 * LoginPage actions
 *
 */

import { LOGIN_USER, LOGIN_USER_ERROR, LOGIN_USER_SUCCESS } from './constants';

export function loginUser() {
  return {
    type: LOGIN_USER,
  };
}

export const loginUserError = error => ({
  type: LOGIN_USER_ERROR,
  payload: error,
});

export const loginUserSuccess = data => ({
  type: LOGIN_USER_SUCCESS,
  payload: data,
});

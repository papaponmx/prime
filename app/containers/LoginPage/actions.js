/*
 *
 * LoginPage actions
 *
 */

import { LOGIN_USER, LOGIN_USER_ERROR, LOGIN_USER_SUCCESS } from './constants';

export function loginUser() {
  console.log('DQTP');

  return {
    type: LOGIN_USER,
  };
}

export const loginUserError = data => ({
  type: LOGIN_USER_ERROR,
  payload: data,
});

export const loginUserSuccess = data => ({
  type: LOGIN_USER_SUCCESS,
  payload: data,
});

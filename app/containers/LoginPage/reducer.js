/*
 *
 * LoginPage reducer
 *
 */

import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from './constants';

export const initialState = {
  user: {
    isLoaded: false,
    data: {},
  },
};

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return state;
    case LOGIN_USER_ERROR:
      return state;
    case LOGIN_USER_SUCCESS:
      return state;
    default:
      return state;
  }
}

export default loginPageReducer;

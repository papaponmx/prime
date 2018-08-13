/*
 *
 * LoginPage reducer
 *
 */

import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from './constants';

export const initialState = {
  isLoaded: false,
  isLoading: false,
  error: null,
  data: {},
};

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_USER_ERROR:
      return {
        isLoaded: false,
        isLoading: false,
        error: action.paylad,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        data: action.payload,
      };
    default:
      return state;
  }
}

export default loginPageReducer;

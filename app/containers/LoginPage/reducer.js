/*
 *
 * LoginPage reducer
 *
 */

import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  PRIME_APP_USER_TOKEN,
  PRIME_APP_USER_DATA,
} from './constants';

const getInitialState = () => {
  let initialState;

  if (window.localStorage.getItem(PRIME_APP_USER_TOKEN)) {
    const userData = window.localStorage.getItem(PRIME_APP_USER_DATA);
    const data = JSON.parse(userData);
    initialState = {
      isLoaded: true,
      isLoading: false,
      error: null,
      data,
    };
  } else {
    initialState = {
      isLoading: false,
      isLoaded: false,
      error: null,
      data: {},
    };
  }
  return initialState;
};

export const initialState = getInitialState();

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

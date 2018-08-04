//  FIXME: Make a barrel from what is in this file.
import { SIGNUP_USER, SET_USER_INFORMATION } from '../types';

export const signupUser = action => ({
  type: SIGNUP_USER,
  // payload: action.payload,
})

export const setUserInformation = ({ token, userInformation }) => ({
  type: SET_USER_INFORMATION,
  payload: {
    token,
    userInformation,
  },
});

import { SIGNUP_USER, SET_USER_INFORMATION } from '.'

export const signupUser = action => ({
  type: SIGNUP_USER,
// payload: action.payload,
})

export const setUserInformation = ({ token, userInformation }) => ({
  type: SET_USER_INFORMATION,
  payload: {
    userInformation,
    token,
}
})

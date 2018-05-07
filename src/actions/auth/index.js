//  FIXME: Make a barrel from what is in this file.
import { SIGNUP_USER } from '../types'

export const signupUser = action => ({
  type: SIGNUP_USER,
  payload: action.payload,
})

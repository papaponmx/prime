import { SET_USER_INFORMATION } from '../actions/types';

let initialState = {
  isLoaded: false,
  // user: {}
}

export default (state = initialState, action) => {
  switch (action.type) {


    case SET_USER_INFORMATION:
    debugger;
    return {
      ...state,
      isLoaded: true,
      token: action.payload.token,
      information: action.payload.userInformation,
    }

    default:
    return state
  }
}

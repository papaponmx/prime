import { SET_USER_INFORMATION } from '../actions/types';

let initialState;

const token = localStorage.getItem('prime-app-UserToken');

if (token) {
  initialState = {
    isLoaded: true,
    user: {
      token,
    },
  }
} else {
  initialState = {
    isLoaded: false,
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFORMATION:
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

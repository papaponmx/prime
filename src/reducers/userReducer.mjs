import { SET_USER_INFORMATION } from "../actions/types";

let initialState;

const token = localStorage.getItem("prime-app-UserToken");
const information = JSON.parse(
  localStorage.getItem("prime-app-UserInformation")
);

if (token) {
  initialState = {
    isLoaded: true,
    user: {
      information,
      token
    }
  };
} else {
  initialState = {
    isLoaded: false
  };
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_INFORMATION:
      return ({
        isLoaded: true,
        token: payload.token,
        information: payload.userInformation,
      });

    default:
      return state;
  }
};

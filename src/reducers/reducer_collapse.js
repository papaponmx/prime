import { ADD_COLLAPSE } from '../actions';

export default (state = { }, action) => {
switch (action.type) {

case ADD_COLLAPSE:
  debugger
  const id = action.payload;
  return {
    ...state,
    [id]: false,
  }

default:
  return state
}
}

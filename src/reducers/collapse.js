import { ADD_COLLAPSE, TOGGLE_COLLAPSE } from '../actions/types';

export default (state = { }, action) => {
switch (action.type) {

case ADD_COLLAPSE:
  const id = action.payload;
  return {
    ...state,
    [id]: false,
  }

case TOGGLE_COLLAPSE:
const idToUpdate = action.payload;
const idUpdated = !state[idToUpdate];
  return {
    ...state,
    [idToUpdate]: idUpdated,
  }

default:
  return state
}
}

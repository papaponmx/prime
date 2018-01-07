import { ADD_ROLE, DELETE_ROLE } from '../actions';
import _ from 'lodash';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_ROLE:
    const id = _.size(state) + 1;
    const newState = _.concat(state,{
      id,
      name: action.payload,
    });
    localStorage.setItem('roles', JSON.stringify(newState));
    return newState;
    // TODO: Validate if the new role already extists

    case DELETE_ROLE:
    const newRoles = _.omit(state.roles, action.payload);
    return {
      ...state,
      roles: newRoles
    }
    default:
    return state;
  }

}

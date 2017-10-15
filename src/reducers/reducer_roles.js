import { ADD_ROLE, DELETE_ROLE } from '../actions';
import _ from 'lodash';

const initialState = {
  roles: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_ROLE:
      return {
        ...state,
        roles: [...state.roles , action.payload]
      }
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

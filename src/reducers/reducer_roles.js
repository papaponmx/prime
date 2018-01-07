import { ADD_ROLE, DELETE_ROLE } from '../actions';
import _ from 'lodash';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_ROLE:
      const id = _.size(state) + 1;
      return _.concat(state,{
          id,
          name: action.payload,
        });
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

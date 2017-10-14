import { ADD_ROLE } from '../actions'
import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_ROLE:
      return {
        ...state,
        action.payload.role
      }
      break;
    default:
      return state;
  }


}

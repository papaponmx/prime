import { ADD_ROLE } from '../actions'
// import _ from 'lodash';

export default (state = {}, action = { type: 'SOMETHING', payload: {} }) => {
  switch (action.type) {

    case ADD_ROLE:
      return {
        ...state,
          roles: action.payload
      }
    default:
      return state;
  }


}

import { ADD_ROLE } from '../actions'
// import _ from 'lodash';
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
    default:
      return state;
  }

}

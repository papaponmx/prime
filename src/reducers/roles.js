// import _ from 'lodash';
import { List, OrderedMap, } from 'immutable';
import {
  // ADD_GOAL,
  ADD_ROLE,
  DELETE_ROLE,
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
} from '../actions';

let initialState = OrderedMap({
  snackbar: {
    message: 'Initial State',
    open: false,
  },
  list: List(),
})

const roles = localStorage.getItem('roles');
if (roles) {
  initialState.list.merge(JSON.parse(roles));
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_ROLE:
    const newItem =  {
      //   // id: new Date().valueOf(),
      name: action.payload.role,
      //   goals: [],
    };

    console.log(state);
    return state.updateIn(['list'], list => list.push(newItem));

    // FIXME: Move this to another reducer;
    //   case ADD_GOAL:
    //   const roleSelected =  Array.filter(state.list, role => role.id === Number(action.payload.roleId));
    //   const name = action.payload.goal;
    //   const goalId = `${_.size(roleSelected[0].list) + 1}G${action.payload.roleId}`;
    //   list = [ {
    //     ...state.list[roleSelected[0]],
    //     goals: [
    //       ...state.list[roleSelected[0]].goals,
    //       {
    //         name,
    //         id: goalId,
    //       },
    //     ]
    //   },
    //   ...state.list,
    // ];
    // list = _.uniqBy(list, 'id');
    // // newState = {
    // //   ...state,
    // //   list,
    // // };
    //
    // localStorage.setItem('roles', JSON.stringify(newState));
    // return state;

    case OPEN_SNACKBAR:
    // TODO: use immutable here
    return state;
    case CLOSE_SNACKBAR:
    // TODO: use immutable here
    return state;
    case DELETE_ROLE:
    // TODO: use immutable here
    return state;
    default:
    return state;
  }

}

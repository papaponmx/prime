import { ADD_GOAL } from "../actions/index";

const initialState = {
  list: [],
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_GOAL:
    const id = state.list.length !== 0 ? state.list.length + 1 : 1;
    const list = state.list.concat(
      {
        id,
        name: action.payload,
      }
    )
    return {
      ...state,
      list,
    }
    
    default:
    return state;
  }
}

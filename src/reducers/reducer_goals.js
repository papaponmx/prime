import { ADD_GOAL } from "../actions/index";

const initialState = {

}

export default (state = initialState, action) => {
    switch (action.type) {

        case ADD_GOAL:
            const id = state.length !== 0 ? state.length + 1 : 1;
            const goals = state.concat({
                id,
                name: action.payload,
            })
            return {
                ...state,
                goals,
            }

        default:
            return state;
    }
}

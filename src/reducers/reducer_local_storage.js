import {
    SAVE_FROM_LOCAL_STORAGE,
    READ_FROM_LOCAL_STORAGE
} from "../actions/index";

const initialState = {

}

// TODO: Handle logic
export default (state = initialState, action) => {
    switch (action.type) {

        case SAVE_FROM_LOCAL_STORAGE:
            return { ...state }

        case READ_FROM_LOCAL_STORAGE:
            return { ...state }

        default:
            return state
    }
}

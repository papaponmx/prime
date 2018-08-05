import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
// import rolesReducer from './roles'
// import collapseReducer from './collapse'
import userReducer from './userReducer'
import goalsReducer from './goalsReducer'

const rootReducer = combineReducers({
  form: formReducer,
  goals: goalsReducer,
  user: userReducer,
  // collapses: collapseReducer,
  // firebase: firebaseReducer,
  // roles: rolesReducer,
})

export default rootReducer

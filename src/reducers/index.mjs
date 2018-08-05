import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
// import rolesReducer from './roles'
// import collapseReducer from './collapse'
import userReducer from './userReducer'
import goalsReducer from './goalsReducer'

const rootReducer = combineReducers({
  // collapses: collapseReducer,
  form: formReducer,
  // firebase: firebaseReducer,
  goals: goalsReducer,
  // roles: rolesReducer,
  user: userReducer,
})

export default rootReducer

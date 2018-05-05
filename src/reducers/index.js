import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import rolesReducer from './reducer_roles'
import collapseReducer from './reducer_collapse'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  roles: rolesReducer,
  form: formReducer,
  collapses: collapseReducer,
  firebase: firebaseReducer,
})

export default rootReducer

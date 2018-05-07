import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import rolesReducer from './roles'
import collapseReducer from './collapse'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  roles: rolesReducer,
  form: formReducer,
  collapses: collapseReducer,
  firebase: firebaseReducer,
})

export default rootReducer

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import rolesReducer from './roles';
import collapseReducer from './collapse';
import userReducer from './user';
import goalsReducer from './goals';

const rootReducer = combineReducers({
  collapses: collapseReducer,
  form: formReducer,
  // firebase: firebaseReducer,
  goals: goalsReducer,
  roles: rolesReducer,
  user: userReducer,
})

export default rootReducer

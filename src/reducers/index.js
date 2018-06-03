import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import rolesReducer from './roles';
import collapseReducer from './collapse';
import userReducer from './user';

const rootReducer = combineReducers({
  roles: rolesReducer,
  form: formReducer,
  collapses: collapseReducer,
  user: userReducer,
  // firebase: firebaseReducer,
})

export default rootReducer

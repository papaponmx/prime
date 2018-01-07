import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import rolesReducer from './reducer_roles';
import collapseReducer from './reducer_collapse';

const rootReducer = combineReducers({
  roles: rolesReducer,
  form: formReducer,
  collapses: collapseReducer,
});

export default rootReducer;
